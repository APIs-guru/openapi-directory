import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeOfDay } from "./timeofday";
import { LatLng } from "./latlng";

export enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED"
,    Driving = "DRIVING"
,    Transit = "TRANSIT"
,    Walking = "WALKING"
,    Cycling = "CYCLING"
}

export enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED"
,    TrafficFree = "TRAFFIC_FREE"
,    BusyHour = "BUSY_HOUR"
}


// CommuteFilter
/** 
 * Input only. Parameters needed for commute search.
**/
export class CommuteFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowImpreciseAddresses" })
  allowImpreciseAddresses?: boolean;

  @Metadata({ data: "json, name=commuteMethod" })
  commuteMethod?: CommuteFilterCommuteMethodEnum;

  @Metadata({ data: "json, name=departureTime" })
  departureTime?: TimeOfDay;

  @Metadata({ data: "json, name=roadTraffic" })
  roadTraffic?: CommuteFilterRoadTrafficEnum;

  @Metadata({ data: "json, name=startCoordinates" })
  startCoordinates?: LatLng;

  @Metadata({ data: "json, name=travelDuration" })
  travelDuration?: string;
}
