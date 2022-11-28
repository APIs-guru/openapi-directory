import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LivingArea } from "./livingarea";
import { ViewsFromUnit } from "./viewsfromunit";


export enum GuestUnitFeaturesBungalowOrVillaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesConnectingUnitAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesExecutiveFloorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesPrivateHomeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesSuiteExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesTierEnum {
    UnitTierUnspecified = "UNIT_TIER_UNSPECIFIED",
    StandardUnit = "STANDARD_UNIT",
    DeluxeUnit = "DELUXE_UNIT"
}

export enum GuestUnitFeaturesTierExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// GuestUnitFeatures
/** 
 * Features and available amenities in the guest unit.
**/
export class GuestUnitFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bungalowOrVilla" })
  bungalowOrVilla?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bungalowOrVillaException" })
  bungalowOrVillaException?: GuestUnitFeaturesBungalowOrVillaExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=connectingUnitAvailable" })
  connectingUnitAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=connectingUnitAvailableException" })
  connectingUnitAvailableException?: GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=executiveFloor" })
  executiveFloor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=executiveFloorException" })
  executiveFloorException?: GuestUnitFeaturesExecutiveFloorExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=maxAdultOccupantsCount" })
  maxAdultOccupantsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxAdultOccupantsCountException" })
  maxAdultOccupantsCountException?: GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=maxChildOccupantsCount" })
  maxChildOccupantsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxChildOccupantsCountException" })
  maxChildOccupantsCountException?: GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=maxOccupantsCount" })
  maxOccupantsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxOccupantsCountException" })
  maxOccupantsCountException?: GuestUnitFeaturesMaxOccupantsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=privateHome" })
  privateHome?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateHomeException" })
  privateHomeException?: GuestUnitFeaturesPrivateHomeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=suite" })
  suite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suiteException" })
  suiteException?: GuestUnitFeaturesSuiteExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: GuestUnitFeaturesTierEnum;

  @SpeakeasyMetadata({ data: "json, name=tierException" })
  tierException?: GuestUnitFeaturesTierExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=totalLivingAreas" })
  totalLivingAreas?: LivingArea;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: ViewsFromUnit;
}
