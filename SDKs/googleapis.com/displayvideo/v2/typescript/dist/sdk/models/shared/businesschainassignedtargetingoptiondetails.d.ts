import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
export declare class BusinessChainAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    proximityRadiusAmount?: number;
    proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    targetingOptionId?: string;
}
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
export declare class BusinessChainAssignedTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    proximityRadiusAmount?: number;
    proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    targetingOptionId?: string;
}
