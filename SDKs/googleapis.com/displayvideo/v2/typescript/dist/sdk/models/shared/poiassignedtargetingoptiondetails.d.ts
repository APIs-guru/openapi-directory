import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
export declare class PoiAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    latitude?: number;
    longitude?: number;
    proximityRadiusAmount?: number;
    proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    targetingOptionId?: string;
}
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
export declare class PoiAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    proximityRadiusAmount?: number;
    proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    targetingOptionId?: string;
}
