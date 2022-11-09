import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LivingArea } from "./livingarea";
import { ViewsFromUnit } from "./viewsfromunit";

export enum GuestUnitFeaturesBungalowOrVillaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesConnectingUnitAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesExecutiveFloorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesMaxOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesPrivateHomeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesSuiteExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum GuestUnitFeaturesTierEnum {
    UnitTierUnspecified = "UNIT_TIER_UNSPECIFIED"
,    StandardUnit = "STANDARD_UNIT"
,    DeluxeUnit = "DELUXE_UNIT"
}

export enum GuestUnitFeaturesTierExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// GuestUnitFeatures
/** 
 * Features and available amenities in the guest unit.
**/
export class GuestUnitFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=bungalowOrVilla" })
  bungalowOrVilla?: boolean;

  @Metadata({ data: "json, name=bungalowOrVillaException" })
  bungalowOrVillaException?: GuestUnitFeaturesBungalowOrVillaExceptionEnum;

  @Metadata({ data: "json, name=connectingUnitAvailable" })
  connectingUnitAvailable?: boolean;

  @Metadata({ data: "json, name=connectingUnitAvailableException" })
  connectingUnitAvailableException?: GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;

  @Metadata({ data: "json, name=executiveFloor" })
  executiveFloor?: boolean;

  @Metadata({ data: "json, name=executiveFloorException" })
  executiveFloorException?: GuestUnitFeaturesExecutiveFloorExceptionEnum;

  @Metadata({ data: "json, name=maxAdultOccupantsCount" })
  maxAdultOccupantsCount?: number;

  @Metadata({ data: "json, name=maxAdultOccupantsCountException" })
  maxAdultOccupantsCountException?: GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;

  @Metadata({ data: "json, name=maxChildOccupantsCount" })
  maxChildOccupantsCount?: number;

  @Metadata({ data: "json, name=maxChildOccupantsCountException" })
  maxChildOccupantsCountException?: GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;

  @Metadata({ data: "json, name=maxOccupantsCount" })
  maxOccupantsCount?: number;

  @Metadata({ data: "json, name=maxOccupantsCountException" })
  maxOccupantsCountException?: GuestUnitFeaturesMaxOccupantsCountExceptionEnum;

  @Metadata({ data: "json, name=privateHome" })
  privateHome?: boolean;

  @Metadata({ data: "json, name=privateHomeException" })
  privateHomeException?: GuestUnitFeaturesPrivateHomeExceptionEnum;

  @Metadata({ data: "json, name=suite" })
  suite?: boolean;

  @Metadata({ data: "json, name=suiteException" })
  suiteException?: GuestUnitFeaturesSuiteExceptionEnum;

  @Metadata({ data: "json, name=tier" })
  tier?: GuestUnitFeaturesTierEnum;

  @Metadata({ data: "json, name=tierException" })
  tierException?: GuestUnitFeaturesTierExceptionEnum;

  @Metadata({ data: "json, name=totalLivingAreas" })
  totalLivingAreas?: LivingArea;

  @Metadata({ data: "json, name=views" })
  views?: ViewsFromUnit;
}
