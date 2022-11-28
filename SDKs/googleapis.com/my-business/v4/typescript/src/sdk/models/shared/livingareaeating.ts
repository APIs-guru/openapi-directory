import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LivingAreaEatingCoffeeMakerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingCookwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingDishwasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingIndoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingKettleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingKitchenAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingMicrowaveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingMinibarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingOutdoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingOvenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingRefrigeratorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingSinkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingSnackbarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingStoveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingTeaStationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaEatingToasterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaEating
/** 
 * Information about eating features in the living area.
**/
export class LivingAreaEating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coffeeMaker" })
  coffeeMaker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=coffeeMakerException" })
  coffeeMakerException?: LivingAreaEatingCoffeeMakerExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cookware" })
  cookware?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cookwareException" })
  cookwareException?: LivingAreaEatingCookwareExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=dishwasher" })
  dishwasher?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dishwasherException" })
  dishwasherException?: LivingAreaEatingDishwasherExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indoorGrill" })
  indoorGrill?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indoorGrillException" })
  indoorGrillException?: LivingAreaEatingIndoorGrillExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kettle" })
  kettle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kettleException" })
  kettleException?: LivingAreaEatingKettleExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=kitchenAvailable" })
  kitchenAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kitchenAvailableException" })
  kitchenAvailableException?: LivingAreaEatingKitchenAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=microwave" })
  microwave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=microwaveException" })
  microwaveException?: LivingAreaEatingMicrowaveExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=minibar" })
  minibar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minibarException" })
  minibarException?: LivingAreaEatingMinibarExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=outdoorGrill" })
  outdoorGrill?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outdoorGrillException" })
  outdoorGrillException?: LivingAreaEatingOutdoorGrillExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=oven" })
  oven?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ovenException" })
  ovenException?: LivingAreaEatingOvenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=refrigerator" })
  refrigerator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refrigeratorException" })
  refrigeratorException?: LivingAreaEatingRefrigeratorExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=sink" })
  sink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sinkException" })
  sinkException?: LivingAreaEatingSinkExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=snackbar" })
  snackbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snackbarException" })
  snackbarException?: LivingAreaEatingSnackbarExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=stove" })
  stove?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stoveException" })
  stoveException?: LivingAreaEatingStoveExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=teaStation" })
  teaStation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=teaStationException" })
  teaStationException?: LivingAreaEatingTeaStationExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=toaster" })
  toaster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toasterException" })
  toasterException?: LivingAreaEatingToasterExceptionEnum;
}
