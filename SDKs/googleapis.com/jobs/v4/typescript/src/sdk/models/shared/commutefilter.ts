import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { LatLng } from "./latlng";


export enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED",
    Driving = "DRIVING",
    Transit = "TRANSIT",
    Walking = "WALKING",
    Cycling = "CYCLING",
    TransitAccessible = "TRANSIT_ACCESSIBLE"
}

export enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED",
    TrafficFree = "TRAFFIC_FREE",
    BusyHour = "BUSY_HOUR"
}


// CommuteFilter
/** 
 * Parameters needed for commute search.
**/
export class CommuteFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowImpreciseAddresses" })
  allowImpreciseAddresses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commuteMethod" })
  commuteMethod?: CommuteFilterCommuteMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=departureTime" })
  departureTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=roadTraffic" })
  roadTraffic?: CommuteFilterRoadTrafficEnum;

  @SpeakeasyMetadata({ data: "json, name=startCoordinates" })
  startCoordinates?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=travelDuration" })
  travelDuration?: string;
}
