import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LivingAreaEatingCoffeeMakerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingCookwareExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingDishwasherExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingIndoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingKettleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingKitchenAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingMicrowaveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingMinibarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingOutdoorGrillExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingOvenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingRefrigeratorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingSinkExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingSnackbarExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingStoveExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingTeaStationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaEatingToasterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Information about eating features in the living area.
**/
export declare class LivingAreaEating extends SpeakeasyBase {
    coffeeMaker?: boolean;
    coffeeMakerException?: LivingAreaEatingCoffeeMakerExceptionEnum;
    cookware?: boolean;
    cookwareException?: LivingAreaEatingCookwareExceptionEnum;
    dishwasher?: boolean;
    dishwasherException?: LivingAreaEatingDishwasherExceptionEnum;
    indoorGrill?: boolean;
    indoorGrillException?: LivingAreaEatingIndoorGrillExceptionEnum;
    kettle?: boolean;
    kettleException?: LivingAreaEatingKettleExceptionEnum;
    kitchenAvailable?: boolean;
    kitchenAvailableException?: LivingAreaEatingKitchenAvailableExceptionEnum;
    microwave?: boolean;
    microwaveException?: LivingAreaEatingMicrowaveExceptionEnum;
    minibar?: boolean;
    minibarException?: LivingAreaEatingMinibarExceptionEnum;
    outdoorGrill?: boolean;
    outdoorGrillException?: LivingAreaEatingOutdoorGrillExceptionEnum;
    oven?: boolean;
    ovenException?: LivingAreaEatingOvenExceptionEnum;
    refrigerator?: boolean;
    refrigeratorException?: LivingAreaEatingRefrigeratorExceptionEnum;
    sink?: boolean;
    sinkException?: LivingAreaEatingSinkExceptionEnum;
    snackbar?: boolean;
    snackbarException?: LivingAreaEatingSnackbarExceptionEnum;
    stove?: boolean;
    stoveException?: LivingAreaEatingStoveExceptionEnum;
    teaStation?: boolean;
    teaStationException?: LivingAreaEatingTeaStationExceptionEnum;
    toaster?: boolean;
    toasterException?: LivingAreaEatingToasterExceptionEnum;
}
