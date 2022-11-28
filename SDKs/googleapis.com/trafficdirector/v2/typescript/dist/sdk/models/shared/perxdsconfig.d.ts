import { SpeakeasyBase } from "../../../internal/utils";
import { ClustersConfigDump } from "./clustersconfigdump";
import { ListenersConfigDump } from "./listenersconfigdump";
import { RoutesConfigDump } from "./routesconfigdump";
import { ScopedRoutesConfigDump } from "./scopedroutesconfigdump";
export declare enum PerXdsConfigStatusEnum {
    Unknown = "UNKNOWN",
    Synced = "SYNCED",
    NotSent = "NOT_SENT",
    Stale = "STALE",
    Error = "ERROR"
}
/**
 * Detailed config (per xDS) with status. [#next-free-field: 6]
**/
export declare class PerXdsConfig extends SpeakeasyBase {
    clusterConfig?: ClustersConfigDump;
    listenerConfig?: ListenersConfigDump;
    routeConfig?: RoutesConfigDump;
    scopedRouteConfig?: ScopedRoutesConfigDump;
    status?: PerXdsConfigStatusEnum;
}
