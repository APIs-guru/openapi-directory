import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PhysicalDistancingPhysicalDistancingRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PhysicalDistancingSafetyDividersExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Physical distancing measures implemented by the hotel during COVID-19.
**/
export declare class PhysicalDistancing extends SpeakeasyBase {
    commonAreasPhysicalDistancingArranged?: boolean;
    commonAreasPhysicalDistancingArrangedException?: PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum;
    physicalDistancingRequired?: boolean;
    physicalDistancingRequiredException?: PhysicalDistancingPhysicalDistancingRequiredExceptionEnum;
    safetyDividers?: boolean;
    safetyDividersException?: PhysicalDistancingSafetyDividersExceptionEnum;
    sharedAreasLimitedOccupancy?: boolean;
    sharedAreasLimitedOccupancyException?: PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum;
    wellnessAreasHavePrivateSpaces?: boolean;
    wellnessAreasHavePrivateSpacesException?: PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum;
}
