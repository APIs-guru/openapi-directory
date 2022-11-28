import { SpeakeasyBase } from "../../../internal/utils";
import { LivingArea } from "./livingarea";
import { ViewsFromUnit } from "./viewsfromunit";
export declare enum GuestUnitFeaturesBungalowOrVillaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesConnectingUnitAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesExecutiveFloorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesMaxOccupantsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesPrivateHomeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesSuiteExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum GuestUnitFeaturesTierEnum {
    UnitTierUnspecified = "UNIT_TIER_UNSPECIFIED",
    StandardUnit = "STANDARD_UNIT",
    DeluxeUnit = "DELUXE_UNIT"
}
export declare enum GuestUnitFeaturesTierExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Features and available amenities in the guest unit.
**/
export declare class GuestUnitFeatures extends SpeakeasyBase {
    bungalowOrVilla?: boolean;
    bungalowOrVillaException?: GuestUnitFeaturesBungalowOrVillaExceptionEnum;
    connectingUnitAvailable?: boolean;
    connectingUnitAvailableException?: GuestUnitFeaturesConnectingUnitAvailableExceptionEnum;
    executiveFloor?: boolean;
    executiveFloorException?: GuestUnitFeaturesExecutiveFloorExceptionEnum;
    maxAdultOccupantsCount?: number;
    maxAdultOccupantsCountException?: GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum;
    maxChildOccupantsCount?: number;
    maxChildOccupantsCountException?: GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum;
    maxOccupantsCount?: number;
    maxOccupantsCountException?: GuestUnitFeaturesMaxOccupantsCountExceptionEnum;
    privateHome?: boolean;
    privateHomeException?: GuestUnitFeaturesPrivateHomeExceptionEnum;
    suite?: boolean;
    suiteException?: GuestUnitFeaturesSuiteExceptionEnum;
    tier?: GuestUnitFeaturesTierEnum;
    tierException?: GuestUnitFeaturesTierExceptionEnum;
    totalLivingAreas?: LivingArea;
    views?: ViewsFromUnit;
}
