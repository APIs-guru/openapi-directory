import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccessibilityMobilityAccessibleElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum AccessibilityMobilityAccessibleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum AccessibilityMobilityAccessibleParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum AccessibilityMobilityAccessiblePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Physical adaptations made to the property in consideration of varying levels of human physical ability.
**/
export declare class Accessibility extends SpeakeasyBase {
    mobilityAccessible?: boolean;
    mobilityAccessibleElevator?: boolean;
    mobilityAccessibleElevatorException?: AccessibilityMobilityAccessibleElevatorExceptionEnum;
    mobilityAccessibleException?: AccessibilityMobilityAccessibleExceptionEnum;
    mobilityAccessibleParking?: boolean;
    mobilityAccessibleParkingException?: AccessibilityMobilityAccessibleParkingExceptionEnum;
    mobilityAccessiblePool?: boolean;
    mobilityAccessiblePoolException?: AccessibilityMobilityAccessiblePoolExceptionEnum;
}
