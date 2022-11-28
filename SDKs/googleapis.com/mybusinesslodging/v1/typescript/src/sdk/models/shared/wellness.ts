import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WellnessDoctorOnCallExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessEllipticalMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFreeFitnessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessFreeWeightsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessMassageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSalonExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSaunaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessSpaExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessTreadmillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum WellnessWeightMachineExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Wellness
/** 
 * Guest facilities at the property to promote or maintain health, beauty, and fitness.
**/
export class Wellness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doctorOnCall" })
  doctorOnCall?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doctorOnCallException" })
  doctorOnCallException?: WellnessDoctorOnCallExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ellipticalMachine" })
  ellipticalMachine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ellipticalMachineException" })
  ellipticalMachineException?: WellnessEllipticalMachineExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=fitnessCenter" })
  fitnessCenter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fitnessCenterException" })
  fitnessCenterException?: WellnessFitnessCenterExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeFitnessCenter" })
  freeFitnessCenter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeFitnessCenterException" })
  freeFitnessCenterException?: WellnessFreeFitnessCenterExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeWeights" })
  freeWeights?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeWeightsException" })
  freeWeightsException?: WellnessFreeWeightsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=massage" })
  massage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=massageException" })
  massageException?: WellnessMassageExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=salon" })
  salon?: boolean;

  @SpeakeasyMetadata({ data: "json, name=salonException" })
  salonException?: WellnessSalonExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=sauna" })
  sauna?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saunaException" })
  saunaException?: WellnessSaunaExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=spa" })
  spa?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spaException" })
  spaException?: WellnessSpaExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=treadmill" })
  treadmill?: boolean;

  @SpeakeasyMetadata({ data: "json, name=treadmillException" })
  treadmillException?: WellnessTreadmillExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=weightMachine" })
  weightMachine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weightMachineException" })
  weightMachineException?: WellnessWeightMachineExceptionEnum;
}
