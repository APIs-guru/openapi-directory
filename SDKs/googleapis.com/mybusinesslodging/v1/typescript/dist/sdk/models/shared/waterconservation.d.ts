import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WaterConservationLinenReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WaterConservationTowelReuseProgramExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WaterConservationWaterSavingShowersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WaterConservationWaterSavingSinksExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum WaterConservationWaterSavingToiletsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Water conservation practices implemented at the hotel.
**/
export declare class WaterConservation extends SpeakeasyBase {
    independentOrganizationAuditsWaterUse?: boolean;
    independentOrganizationAuditsWaterUseException?: WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum;
    linenReuseProgram?: boolean;
    linenReuseProgramException?: WaterConservationLinenReuseProgramExceptionEnum;
    towelReuseProgram?: boolean;
    towelReuseProgramException?: WaterConservationTowelReuseProgramExceptionEnum;
    waterSavingShowers?: boolean;
    waterSavingShowersException?: WaterConservationWaterSavingShowersExceptionEnum;
    waterSavingSinks?: boolean;
    waterSavingSinksException?: WaterConservationWaterSavingSinksExceptionEnum;
    waterSavingToilets?: boolean;
    waterSavingToiletsException?: WaterConservationWaterSavingToiletsExceptionEnum;
}
