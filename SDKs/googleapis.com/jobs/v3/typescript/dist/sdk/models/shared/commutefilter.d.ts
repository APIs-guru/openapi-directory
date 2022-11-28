import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { LatLng } from "./latlng";
export declare enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED",
    Driving = "DRIVING",
    Transit = "TRANSIT"
}
export declare enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED",
    TrafficFree = "TRAFFIC_FREE",
    BusyHour = "BUSY_HOUR"
}
/**
 * Input only. Parameters needed for commute search.
**/
export declare class CommuteFilter extends SpeakeasyBase {
    allowImpreciseAddresses?: boolean;
    commuteMethod?: CommuteFilterCommuteMethodEnum;
    departureTime?: TimeOfDay;
    roadTraffic?: CommuteFilterRoadTrafficEnum;
    startCoordinates?: LatLng;
    travelDuration?: string;
}
