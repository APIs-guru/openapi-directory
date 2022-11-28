import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ViewsFromUnitBeachViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitCityViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitGardenViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitLakeViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitLandmarkViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitOceanViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitPoolViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ViewsFromUnitValleyViewExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Views available from the guest unit itself.
**/
export declare class ViewsFromUnit extends SpeakeasyBase {
    beachView?: boolean;
    beachViewException?: ViewsFromUnitBeachViewExceptionEnum;
    cityView?: boolean;
    cityViewException?: ViewsFromUnitCityViewExceptionEnum;
    gardenView?: boolean;
    gardenViewException?: ViewsFromUnitGardenViewExceptionEnum;
    lakeView?: boolean;
    lakeViewException?: ViewsFromUnitLakeViewExceptionEnum;
    landmarkView?: boolean;
    landmarkViewException?: ViewsFromUnitLandmarkViewExceptionEnum;
    oceanView?: boolean;
    oceanViewException?: ViewsFromUnitOceanViewExceptionEnum;
    poolView?: boolean;
    poolViewException?: ViewsFromUnitPoolViewExceptionEnum;
    valleyView?: boolean;
    valleyViewException?: ViewsFromUnitValleyViewExceptionEnum;
}
