import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccessibilityMobilityAccessibleElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessibleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessibleParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessiblePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Accessibility
/** 
 * Physical adaptations made to the property in consideration of varying levels of human physical ability.
**/
export class Accessibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobilityAccessible" })
  mobilityAccessible?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleElevator" })
  mobilityAccessibleElevator?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleElevatorException" })
  mobilityAccessibleElevatorException?: AccessibilityMobilityAccessibleElevatorExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleException" })
  mobilityAccessibleException?: AccessibilityMobilityAccessibleExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleParking" })
  mobilityAccessibleParking?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleParkingException" })
  mobilityAccessibleParkingException?: AccessibilityMobilityAccessibleParkingExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessiblePool" })
  mobilityAccessiblePool?: boolean;

  @Metadata({ data: "json, name=mobilityAccessiblePoolException" })
  mobilityAccessiblePoolException?: AccessibilityMobilityAccessiblePoolExceptionEnum;
}
