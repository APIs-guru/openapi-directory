import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED"
,    DistanceUnitMiles = "DISTANCE_UNIT_MILES"
,    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}


// BusinessChainAssignedTargetingOptionDetails
/** 
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
export class BusinessChainAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @Metadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
