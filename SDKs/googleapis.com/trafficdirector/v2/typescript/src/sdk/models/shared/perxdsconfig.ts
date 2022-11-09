import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClustersConfigDump } from "./clustersconfigdump";
import { ListenersConfigDump } from "./listenersconfigdump";
import { RoutesConfigDump } from "./routesconfigdump";
import { ScopedRoutesConfigDump } from "./scopedroutesconfigdump";

export enum PerXdsConfigStatusEnum {
    Unknown = "UNKNOWN"
,    Synced = "SYNCED"
,    NotSent = "NOT_SENT"
,    Stale = "STALE"
,    Error = "ERROR"
}


// PerXdsConfig
/** 
 * Detailed config (per xDS) with status. [#next-free-field: 6]
**/
export class PerXdsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterConfig" })
  clusterConfig?: ClustersConfigDump;

  @Metadata({ data: "json, name=listenerConfig" })
  listenerConfig?: ListenersConfigDump;

  @Metadata({ data: "json, name=routeConfig" })
  routeConfig?: RoutesConfigDump;

  @Metadata({ data: "json, name=scopedRouteConfig" })
  scopedRouteConfig?: ScopedRoutesConfigDump;

  @Metadata({ data: "json, name=status" })
  status?: PerXdsConfigStatusEnum;
}
