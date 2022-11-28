import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoutingCurbsideStrictnessEnum {
    Ignore = "ignore",
    Soft = "soft",
    Strict = "strict"
}

export enum RoutingNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}

export enum RoutingSnapPreventionsEnum {
    Motorway = "motorway",
    Trunk = "trunk",
    Bridge = "bridge",
    Ford = "ford",
    Tunnel = "tunnel",
    Ferry = "ferry"
}


// Routing
/** 
 * This contains all routing specific configurations.
**/
export class Routing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calc_points" })
  calcPoints?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consider_traffic" })
  considerTraffic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=curbside_strictness" })
  curbsideStrictness?: RoutingCurbsideStrictnessEnum;

  @SpeakeasyMetadata({ data: "json, name=fail_fast" })
  failFast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network_data_provider" })
  networkDataProvider?: RoutingNetworkDataProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=return_snapped_waypoints" })
  returnSnappedWaypoints?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snap_preventions" })
  snapPreventions?: RoutingSnapPreventionsEnum[];
}
