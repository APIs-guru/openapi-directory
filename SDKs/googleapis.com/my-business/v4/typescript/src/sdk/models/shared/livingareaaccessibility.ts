import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LivingAreaAccessibilityAdaCompliantUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaAccessibility
/** 
 * Accessibility features of the living area.
**/
export class LivingAreaAccessibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaCompliantUnit" })
  adaCompliantUnit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adaCompliantUnitException" })
  adaCompliantUnitException?: LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleDoorbell" })
  hearingAccessibleDoorbell?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleDoorbellException" })
  hearingAccessibleDoorbellException?: LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleFireAlarm" })
  hearingAccessibleFireAlarm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleFireAlarmException" })
  hearingAccessibleFireAlarmException?: LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleUnit" })
  hearingAccessibleUnit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearingAccessibleUnitException" })
  hearingAccessibleUnitException?: LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleBathtub" })
  mobilityAccessibleBathtub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleBathtubException" })
  mobilityAccessibleBathtubException?: LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleShower" })
  mobilityAccessibleShower?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleShowerException" })
  mobilityAccessibleShowerException?: LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleToilet" })
  mobilityAccessibleToilet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleToiletException" })
  mobilityAccessibleToiletException?: LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleUnit" })
  mobilityAccessibleUnit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobilityAccessibleUnitException" })
  mobilityAccessibleUnitException?: LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
}
