import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LivingAreaSleepingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingBunkBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingCribsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingDoubleBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingFeatherPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingHypoallergenicBeddingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingKingBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingMemoryFoamPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingOtherBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingQueenBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingRollAwayBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSofaBedsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaSleepingSyntheticPillowsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaSleeping
/** 
 * Information about sleeping features in the living area.
**/
export class LivingAreaSleeping extends SpeakeasyBase {
  @Metadata({ data: "json, name=bedsCount" })
  bedsCount?: number;

  @Metadata({ data: "json, name=bedsCountException" })
  bedsCountException?: LivingAreaSleepingBedsCountExceptionEnum;

  @Metadata({ data: "json, name=bunkBedsCount" })
  bunkBedsCount?: number;

  @Metadata({ data: "json, name=bunkBedsCountException" })
  bunkBedsCountException?: LivingAreaSleepingBunkBedsCountExceptionEnum;

  @Metadata({ data: "json, name=cribsCount" })
  cribsCount?: number;

  @Metadata({ data: "json, name=cribsCountException" })
  cribsCountException?: LivingAreaSleepingCribsCountExceptionEnum;

  @Metadata({ data: "json, name=doubleBedsCount" })
  doubleBedsCount?: number;

  @Metadata({ data: "json, name=doubleBedsCountException" })
  doubleBedsCountException?: LivingAreaSleepingDoubleBedsCountExceptionEnum;

  @Metadata({ data: "json, name=featherPillows" })
  featherPillows?: boolean;

  @Metadata({ data: "json, name=featherPillowsException" })
  featherPillowsException?: LivingAreaSleepingFeatherPillowsExceptionEnum;

  @Metadata({ data: "json, name=hypoallergenicBedding" })
  hypoallergenicBedding?: boolean;

  @Metadata({ data: "json, name=hypoallergenicBeddingException" })
  hypoallergenicBeddingException?: LivingAreaSleepingHypoallergenicBeddingExceptionEnum;

  @Metadata({ data: "json, name=kingBedsCount" })
  kingBedsCount?: number;

  @Metadata({ data: "json, name=kingBedsCountException" })
  kingBedsCountException?: LivingAreaSleepingKingBedsCountExceptionEnum;

  @Metadata({ data: "json, name=memoryFoamPillows" })
  memoryFoamPillows?: boolean;

  @Metadata({ data: "json, name=memoryFoamPillowsException" })
  memoryFoamPillowsException?: LivingAreaSleepingMemoryFoamPillowsExceptionEnum;

  @Metadata({ data: "json, name=otherBedsCount" })
  otherBedsCount?: number;

  @Metadata({ data: "json, name=otherBedsCountException" })
  otherBedsCountException?: LivingAreaSleepingOtherBedsCountExceptionEnum;

  @Metadata({ data: "json, name=queenBedsCount" })
  queenBedsCount?: number;

  @Metadata({ data: "json, name=queenBedsCountException" })
  queenBedsCountException?: LivingAreaSleepingQueenBedsCountExceptionEnum;

  @Metadata({ data: "json, name=rollAwayBedsCount" })
  rollAwayBedsCount?: number;

  @Metadata({ data: "json, name=rollAwayBedsCountException" })
  rollAwayBedsCountException?: LivingAreaSleepingRollAwayBedsCountExceptionEnum;

  @Metadata({ data: "json, name=singleOrTwinBedsCount" })
  singleOrTwinBedsCount?: number;

  @Metadata({ data: "json, name=singleOrTwinBedsCountException" })
  singleOrTwinBedsCountException?: LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum;

  @Metadata({ data: "json, name=sofaBedsCount" })
  sofaBedsCount?: number;

  @Metadata({ data: "json, name=sofaBedsCountException" })
  sofaBedsCountException?: LivingAreaSleepingSofaBedsCountExceptionEnum;

  @Metadata({ data: "json, name=syntheticPillows" })
  syntheticPillows?: boolean;

  @Metadata({ data: "json, name=syntheticPillowsException" })
  syntheticPillowsException?: LivingAreaSleepingSyntheticPillowsExceptionEnum;
}
