import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { LatLng } from "./latlng";
export declare enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED",
    Driving = "DRIVING",
    Transit = "TRANSIT",
    Walking = "WALKING",
    Cycling = "CYCLING",
    TransitAccessible = "TRANSIT_ACCESSIBLE"
}
export declare enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED",
    TrafficFree = "TRAFFIC_FREE",
    BusyHour = "BUSY_HOUR"
}
/**
 * Parameters needed for commute search.
**/
export declare class CommuteFilter extends SpeakeasyBase {
    allowImpreciseAddresses?: boolean;
    commuteMethod?: CommuteFilterCommuteMethodEnum;
    departureTime?: TimeOfDay;
    roadTraffic?: CommuteFilterRoadTrafficEnum;
    startCoordinates?: LatLng;
    travelDuration?: string;
}
