import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RoutingCurbsideStrictnessEnum {
    Ignore = "ignore"
,    Soft = "soft"
,    Strict = "strict"
}

export enum RoutingNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap"
,    Tomtom = "tomtom"
}

export enum RoutingSnapPreventionsEnum {
    Motorway = "motorway"
,    Trunk = "trunk"
,    Bridge = "bridge"
,    Ford = "ford"
,    Tunnel = "tunnel"
,    Ferry = "ferry"
}


// Routing
/** 
 * This contains all routing specific configurations.
**/
export class Routing extends SpeakeasyBase {
  @Metadata({ data: "json, name=calc_points" })
  calcPoints?: boolean;

  @Metadata({ data: "json, name=consider_traffic" })
  considerTraffic?: boolean;

  @Metadata({ data: "json, name=curbside_strictness" })
  curbsideStrictness?: RoutingCurbsideStrictnessEnum;

  @Metadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @Metadata({ data: "json, name=network_data_provider" })
  networkDataProvider?: RoutingNetworkDataProviderEnum;

  @Metadata({ data: "json, name=return_snapped_waypoints" })
  returnSnappedWaypoints?: boolean;

  @Metadata({ data: "json, name=snap_preventions" })
  snapPreventions?: RoutingSnapPreventionsEnum[];
}
