import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED"
,    DistanceUnitMiles = "DISTANCE_UNIT_MILES"
,    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}


// PoiAssignedTargetingOptionDetails
/** 
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
export class PoiAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @Metadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
