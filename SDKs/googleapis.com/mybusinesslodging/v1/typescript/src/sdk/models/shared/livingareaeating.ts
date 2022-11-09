import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LivingAreaEatingCoffeeMakerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingCookwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingDishwasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingIndoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingKettleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingKitchenAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingMicrowaveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingMinibarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingOutdoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingOvenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingRefrigeratorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingSinkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingSnackbarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingStoveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingTeaStationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingToasterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaEating
/** 
 * Information about eating features in the living area.
**/
export class LivingAreaEating extends SpeakeasyBase {
  @Metadata({ data: "json, name=coffeeMaker" })
  coffeeMaker?: boolean;

  @Metadata({ data: "json, name=coffeeMakerException" })
  coffeeMakerException?: LivingAreaEatingCoffeeMakerExceptionEnum;

  @Metadata({ data: "json, name=cookware" })
  cookware?: boolean;

  @Metadata({ data: "json, name=cookwareException" })
  cookwareException?: LivingAreaEatingCookwareExceptionEnum;

  @Metadata({ data: "json, name=dishwasher" })
  dishwasher?: boolean;

  @Metadata({ data: "json, name=dishwasherException" })
  dishwasherException?: LivingAreaEatingDishwasherExceptionEnum;

  @Metadata({ data: "json, name=indoorGrill" })
  indoorGrill?: boolean;

  @Metadata({ data: "json, name=indoorGrillException" })
  indoorGrillException?: LivingAreaEatingIndoorGrillExceptionEnum;

  @Metadata({ data: "json, name=kettle" })
  kettle?: boolean;

  @Metadata({ data: "json, name=kettleException" })
  kettleException?: LivingAreaEatingKettleExceptionEnum;

  @Metadata({ data: "json, name=kitchenAvailable" })
  kitchenAvailable?: boolean;

  @Metadata({ data: "json, name=kitchenAvailableException" })
  kitchenAvailableException?: LivingAreaEatingKitchenAvailableExceptionEnum;

  @Metadata({ data: "json, name=microwave" })
  microwave?: boolean;

  @Metadata({ data: "json, name=microwaveException" })
  microwaveException?: LivingAreaEatingMicrowaveExceptionEnum;

  @Metadata({ data: "json, name=minibar" })
  minibar?: boolean;

  @Metadata({ data: "json, name=minibarException" })
  minibarException?: LivingAreaEatingMinibarExceptionEnum;

  @Metadata({ data: "json, name=outdoorGrill" })
  outdoorGrill?: boolean;

  @Metadata({ data: "json, name=outdoorGrillException" })
  outdoorGrillException?: LivingAreaEatingOutdoorGrillExceptionEnum;

  @Metadata({ data: "json, name=oven" })
  oven?: boolean;

  @Metadata({ data: "json, name=ovenException" })
  ovenException?: LivingAreaEatingOvenExceptionEnum;

  @Metadata({ data: "json, name=refrigerator" })
  refrigerator?: boolean;

  @Metadata({ data: "json, name=refrigeratorException" })
  refrigeratorException?: LivingAreaEatingRefrigeratorExceptionEnum;

  @Metadata({ data: "json, name=sink" })
  sink?: boolean;

  @Metadata({ data: "json, name=sinkException" })
  sinkException?: LivingAreaEatingSinkExceptionEnum;

  @Metadata({ data: "json, name=snackbar" })
  snackbar?: boolean;

  @Metadata({ data: "json, name=snackbarException" })
  snackbarException?: LivingAreaEatingSnackbarExceptionEnum;

  @Metadata({ data: "json, name=stove" })
  stove?: boolean;

  @Metadata({ data: "json, name=stoveException" })
  stoveException?: LivingAreaEatingStoveExceptionEnum;

  @Metadata({ data: "json, name=teaStation" })
  teaStation?: boolean;

  @Metadata({ data: "json, name=teaStationException" })
  teaStationException?: LivingAreaEatingTeaStationExceptionEnum;

  @Metadata({ data: "json, name=toaster" })
  toaster?: boolean;

  @Metadata({ data: "json, name=toasterException" })
  toasterException?: LivingAreaEatingToasterExceptionEnum;
}
