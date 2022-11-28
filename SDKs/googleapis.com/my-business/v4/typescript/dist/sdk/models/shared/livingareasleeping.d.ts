import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LivingAreaSleepingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingBunkBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingCribsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingDoubleBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingFeatherPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingHypoallergenicBeddingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingKingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingMemoryFoamPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingOtherBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingQueenBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingRollAwayBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingSofaBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaSleepingSyntheticPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about sleeping features in the living area.
**/
export declare class LivingAreaSleeping extends SpeakeasyBase {
    bedsCount?: number;
    bedsCountException?: LivingAreaSleepingBedsCountExceptionEnum;
    bunkBedsCount?: number;
    bunkBedsCountException?: LivingAreaSleepingBunkBedsCountExceptionEnum;
    cribsCount?: number;
    cribsCountException?: LivingAreaSleepingCribsCountExceptionEnum;
    doubleBedsCount?: number;
    doubleBedsCountException?: LivingAreaSleepingDoubleBedsCountExceptionEnum;
    featherPillows?: boolean;
    featherPillowsException?: LivingAreaSleepingFeatherPillowsExceptionEnum;
    hypoallergenicBedding?: boolean;
    hypoallergenicBeddingException?: LivingAreaSleepingHypoallergenicBeddingExceptionEnum;
    kingBedsCount?: number;
    kingBedsCountException?: LivingAreaSleepingKingBedsCountExceptionEnum;
    memoryFoamPillows?: boolean;
    memoryFoamPillowsException?: LivingAreaSleepingMemoryFoamPillowsExceptionEnum;
    otherBedsCount?: number;
    otherBedsCountException?: LivingAreaSleepingOtherBedsCountExceptionEnum;
    queenBedsCount?: number;
    queenBedsCountException?: LivingAreaSleepingQueenBedsCountExceptionEnum;
    rollAwayBedsCount?: number;
    rollAwayBedsCountException?: LivingAreaSleepingRollAwayBedsCountExceptionEnum;
    singleOrTwinBedsCount?: number;
    singleOrTwinBedsCountException?: LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;
    sofaBedsCount?: number;
    sofaBedsCountException?: LivingAreaSleepingSofaBedsCountExceptionEnum;
    syntheticPillows?: boolean;
    syntheticPillowsException?: LivingAreaSleepingSyntheticPillowsExceptionEnum;
}
