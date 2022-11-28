import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    ProximityRadiusUnitUnspecified = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED",
    ProximityRadiusUnitMiles = "PROXIMITY_RADIUS_UNIT_MILES",
    ProximityRadiusUnitKilometers = "PROXIMITY_RADIUS_UNIT_KILOMETERS"
}


// ProximityLocationListAssignedTargetingOptionDetails
/** 
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
**/
export class ProximityLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proximityLocationListId" })
  proximityLocationListId?: string;

  @SpeakeasyMetadata({ data: "json, name=proximityRadius" })
  proximityRadius?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
}
