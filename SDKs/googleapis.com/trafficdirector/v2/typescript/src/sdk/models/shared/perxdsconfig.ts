import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClustersConfigDump } from "./clustersconfigdump";
import { ListenersConfigDump } from "./listenersconfigdump";
import { RoutesConfigDump } from "./routesconfigdump";
import { ScopedRoutesConfigDump } from "./scopedroutesconfigdump";


export enum PerXdsConfigStatusEnum {
    Unknown = "UNKNOWN",
    Synced = "SYNCED",
    NotSent = "NOT_SENT",
    Stale = "STALE",
    Error = "ERROR"
}


// PerXdsConfig
/** 
 * Detailed config (per xDS) with status. [#next-free-field: 6]
**/
export class PerXdsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterConfig" })
  clusterConfig?: ClustersConfigDump;

  @SpeakeasyMetadata({ data: "json, name=listenerConfig" })
  listenerConfig?: ListenersConfigDump;

  @SpeakeasyMetadata({ data: "json, name=routeConfig" })
  routeConfig?: RoutesConfigDump;

  @SpeakeasyMetadata({ data: "json, name=scopedRouteConfig" })
  scopedRouteConfig?: ScopedRoutesConfigDump;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PerXdsConfigStatusEnum;
}
