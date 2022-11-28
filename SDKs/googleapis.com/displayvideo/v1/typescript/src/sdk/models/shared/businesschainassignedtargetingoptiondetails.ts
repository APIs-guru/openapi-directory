import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}


// BusinessChainAssignedTargetingOptionDetails
/** 
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
export class BusinessChainAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// BusinessChainAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
export class BusinessChainAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
