import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum {
    ProximityRadiusRangeUnspecified = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED",
    ProximityRadiusRangeSmall = "PROXIMITY_RADIUS_RANGE_SMALL",
    ProximityRadiusRangeMedium = "PROXIMITY_RADIUS_RANGE_MEDIUM",
    ProximityRadiusRangeLarge = "PROXIMITY_RADIUS_RANGE_LARGE"
}


// ProximityLocationListAssignedTargetingOptionDetails
/** 
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
**/
export class ProximityLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proximityLocationListId" })
  proximityLocationListId?: string;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusRange" })
  proximityRadiusRange?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
}
