import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LivingAreaSleepingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingBunkBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingCribsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingDoubleBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingFeatherPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingHypoallergenicBeddingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingKingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingMemoryFoamPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingOtherBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingQueenBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingRollAwayBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSofaBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSyntheticPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaSleeping
/** 
 * Information about sleeping features in the living area.
**/
export class LivingAreaSleeping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bedsCount" })
  bedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bedsCountException" })
  bedsCountException?: LivingAreaSleepingBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=bunkBedsCount" })
  bunkBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bunkBedsCountException" })
  bunkBedsCountException?: LivingAreaSleepingBunkBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cribsCount" })
  cribsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=cribsCountException" })
  cribsCountException?: LivingAreaSleepingCribsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=doubleBedsCount" })
  doubleBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=doubleBedsCountException" })
  doubleBedsCountException?: LivingAreaSleepingDoubleBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=featherPillows" })
  featherPillows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=featherPillowsException" })
  featherPillowsException?: LivingAreaSleepingFeatherPillowsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hypoallergenicBedding" })
  hypoallergenicBedding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hypoallergenicBeddingException" })
  hypoallergenicBeddingException?: LivingAreaSleepingHypoallergenicBeddingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kingBedsCount" })
  kingBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=kingBedsCountException" })
  kingBedsCountException?: LivingAreaSleepingKingBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=memoryFoamPillows" })
  memoryFoamPillows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memoryFoamPillowsException" })
  memoryFoamPillowsException?: LivingAreaSleepingMemoryFoamPillowsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=otherBedsCount" })
  otherBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=otherBedsCountException" })
  otherBedsCountException?: LivingAreaSleepingOtherBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=queenBedsCount" })
  queenBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=queenBedsCountException" })
  queenBedsCountException?: LivingAreaSleepingQueenBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=rollAwayBedsCount" })
  rollAwayBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rollAwayBedsCountException" })
  rollAwayBedsCountException?: LivingAreaSleepingRollAwayBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=singleOrTwinBedsCount" })
  singleOrTwinBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=singleOrTwinBedsCountException" })
  singleOrTwinBedsCountException?: LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=sofaBedsCount" })
  sofaBedsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sofaBedsCountException" })
  sofaBedsCountException?: LivingAreaSleepingSofaBedsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=syntheticPillows" })
  syntheticPillows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syntheticPillowsException" })
  syntheticPillowsException?: LivingAreaSleepingSyntheticPillowsExceptionEnum;
}
