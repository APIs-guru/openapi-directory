import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RoutingCurbsideStrictnessEnum {
    Ignore = "ignore",
    Soft = "soft",
    Strict = "strict"
}
export declare enum RoutingNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}
export declare enum RoutingSnapPreventionsEnum {
    Motorway = "motorway",
    Trunk = "trunk",
    Bridge = "bridge",
    Ford = "ford",
    Tunnel = "tunnel",
    Ferry = "ferry"
}
/**
 * This contains all routing specific configurations.
**/
export declare class Routing extends SpeakeasyBase {
    calcPoints?: boolean;
    considerTraffic?: boolean;
    curbsideStrictness?: RoutingCurbsideStrictnessEnum;
    failFast?: boolean;
    networkDataProvider?: RoutingNetworkDataProviderEnum;
    returnSnappedWaypoints?: boolean;
    snapPreventions?: RoutingSnapPreventionsEnum[];
}
