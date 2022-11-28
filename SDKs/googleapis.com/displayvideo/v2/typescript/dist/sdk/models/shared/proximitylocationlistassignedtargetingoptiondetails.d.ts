import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    ProximityRadiusUnitUnspecified = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED",
    ProximityRadiusUnitMiles = "PROXIMITY_RADIUS_UNIT_MILES",
    ProximityRadiusUnitKilometers = "PROXIMITY_RADIUS_UNIT_KILOMETERS"
}
/**
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
**/
export declare class ProximityLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
    proximityLocationListId?: string;
    proximityRadius?: number;
    proximityRadiusUnit?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
}
