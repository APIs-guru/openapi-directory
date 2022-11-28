import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum {
    ProximityRadiusRangeUnspecified = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED",
    ProximityRadiusRangeSmall = "PROXIMITY_RADIUS_RANGE_SMALL",
    ProximityRadiusRangeMedium = "PROXIMITY_RADIUS_RANGE_MEDIUM",
    ProximityRadiusRangeLarge = "PROXIMITY_RADIUS_RANGE_LARGE"
}
/**
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
**/
export declare class ProximityLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
    proximityLocationListId?: string;
    proximityRadiusRange?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
}
