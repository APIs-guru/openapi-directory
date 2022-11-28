import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocationListLocationTypeEnum {
    TargetingLocationTypeUnspecified = "TARGETING_LOCATION_TYPE_UNSPECIFIED",
    TargetingLocationTypeProximity = "TARGETING_LOCATION_TYPE_PROXIMITY",
    TargetingLocationTypeRegional = "TARGETING_LOCATION_TYPE_REGIONAL"
}
/**
 * A list of locations used for targeting.
**/
export declare class LocationListInput extends SpeakeasyBase {
    advertiserId?: string;
    displayName?: string;
    locationType?: LocationListLocationTypeEnum;
}
/**
 * A list of locations used for targeting.
**/
export declare class LocationList extends SpeakeasyBase {
    advertiserId?: string;
    displayName?: string;
    locationListId?: string;
    locationType?: LocationListLocationTypeEnum;
    name?: string;
}
