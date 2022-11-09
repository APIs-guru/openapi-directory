import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LivingAreaAccessibilityAdaCompliantUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LivingAreaAccessibility
/** 
 * Accessibility features of the living area.
**/
export class LivingAreaAccessibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=adaCompliantUnit" })
  adaCompliantUnit?: boolean;

  @Metadata({ data: "json, name=adaCompliantUnitException" })
  adaCompliantUnitException?: LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;

  @Metadata({ data: "json, name=hearingAccessibleDoorbell" })
  hearingAccessibleDoorbell?: boolean;

  @Metadata({ data: "json, name=hearingAccessibleDoorbellException" })
  hearingAccessibleDoorbellException?: LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;

  @Metadata({ data: "json, name=hearingAccessibleFireAlarm" })
  hearingAccessibleFireAlarm?: boolean;

  @Metadata({ data: "json, name=hearingAccessibleFireAlarmException" })
  hearingAccessibleFireAlarmException?: LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;

  @Metadata({ data: "json, name=hearingAccessibleUnit" })
  hearingAccessibleUnit?: boolean;

  @Metadata({ data: "json, name=hearingAccessibleUnitException" })
  hearingAccessibleUnitException?: LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleBathtub" })
  mobilityAccessibleBathtub?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleBathtubException" })
  mobilityAccessibleBathtubException?: LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleShower" })
  mobilityAccessibleShower?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleShowerException" })
  mobilityAccessibleShowerException?: LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleToilet" })
  mobilityAccessibleToilet?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleToiletException" })
  mobilityAccessibleToiletException?: LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;

  @Metadata({ data: "json, name=mobilityAccessibleUnit" })
  mobilityAccessibleUnit?: boolean;

  @Metadata({ data: "json, name=mobilityAccessibleUnitException" })
  mobilityAccessibleUnitException?: LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
}
