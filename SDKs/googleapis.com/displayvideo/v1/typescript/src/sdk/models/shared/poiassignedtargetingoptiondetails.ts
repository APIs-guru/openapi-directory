import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}


// PoiAssignedTargetingOptionDetails
/** 
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
export class PoiAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// PoiAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
export class PoiAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proximityRadiusAmount" })
  proximityRadiusAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=proximityRadiusUnit" })
  proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
