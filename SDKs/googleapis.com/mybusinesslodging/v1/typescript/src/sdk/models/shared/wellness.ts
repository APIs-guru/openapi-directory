import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WellnessDoctorOnCallExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessEllipticalMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFreeFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFreeWeightsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessMassageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSalonExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSaunaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSpaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessTreadmillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessWeightMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Wellness
/** 
 * Guest facilities at the property to promote or maintain health, beauty, and fitness.
**/
export class Wellness extends SpeakeasyBase {
  @Metadata({ data: "json, name=doctorOnCall" })
  doctorOnCall?: boolean;

  @Metadata({ data: "json, name=doctorOnCallException" })
  doctorOnCallException?: WellnessDoctorOnCallExceptionEnum;

  @Metadata({ data: "json, name=ellipticalMachine" })
  ellipticalMachine?: boolean;

  @Metadata({ data: "json, name=ellipticalMachineException" })
  ellipticalMachineException?: WellnessEllipticalMachineExceptionEnum;

  @Metadata({ data: "json, name=fitnessCenter" })
  fitnessCenter?: boolean;

  @Metadata({ data: "json, name=fitnessCenterException" })
  fitnessCenterException?: WellnessFitnessCenterExceptionEnum;

  @Metadata({ data: "json, name=freeFitnessCenter" })
  freeFitnessCenter?: boolean;

  @Metadata({ data: "json, name=freeFitnessCenterException" })
  freeFitnessCenterException?: WellnessFreeFitnessCenterExceptionEnum;

  @Metadata({ data: "json, name=freeWeights" })
  freeWeights?: boolean;

  @Metadata({ data: "json, name=freeWeightsException" })
  freeWeightsException?: WellnessFreeWeightsExceptionEnum;

  @Metadata({ data: "json, name=massage" })
  massage?: boolean;

  @Metadata({ data: "json, name=massageException" })
  massageException?: WellnessMassageExceptionEnum;

  @Metadata({ data: "json, name=salon" })
  salon?: boolean;

  @Metadata({ data: "json, name=salonException" })
  salonException?: WellnessSalonExceptionEnum;

  @Metadata({ data: "json, name=sauna" })
  sauna?: boolean;

  @Metadata({ data: "json, name=saunaException" })
  saunaException?: WellnessSaunaExceptionEnum;

  @Metadata({ data: "json, name=spa" })
  spa?: boolean;

  @Metadata({ data: "json, name=spaException" })
  spaException?: WellnessSpaExceptionEnum;

  @Metadata({ data: "json, name=treadmill" })
  treadmill?: boolean;

  @Metadata({ data: "json, name=treadmillException" })
  treadmillException?: WellnessTreadmillExceptionEnum;

  @Metadata({ data: "json, name=weightMachine" })
  weightMachine?: boolean;

  @Metadata({ data: "json, name=weightMachineException" })
  weightMachineException?: WellnessWeightMachineExceptionEnum;
}
