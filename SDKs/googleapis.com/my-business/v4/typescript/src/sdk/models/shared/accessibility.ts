import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccessibilityMobilityAccessibleElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessibleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessibleParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum AccessibilityMobilityAccessiblePoolExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Accessibility
/** 
 * Physical adaptations made to the property in consideration of varying levels of human physical ability.
**/
export class Accessibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mobilityAccessible" })
  mobilityAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleElevator" })
  mobilityAccessibleElevator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleElevatorException" })
  mobilityAccessibleElevatorException?: AccessibilityMobilityAccessibleElevatorExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleException" })
  mobilityAccessibleException?: AccessibilityMobilityAccessibleExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleParking" })
  mobilityAccessibleParking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleParkingException" })
  mobilityAccessibleParkingException?: AccessibilityMobilityAccessibleParkingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessiblePool" })
  mobilityAccessiblePool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessiblePoolException" })
  mobilityAccessiblePoolException?: AccessibilityMobilityAccessiblePoolExceptionEnum;
}
