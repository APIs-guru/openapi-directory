import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LivingAreaAccessibilityAdaCompliantUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Accessibility features of the living area.
**/
export declare class LivingAreaAccessibility extends SpeakeasyBase {
    adaCompliantUnit?: boolean;
    adaCompliantUnitException?: LivingAreaAccessibilityAdaCompliantUnitExceptionEnum;
    hearingAccessibleDoorbell?: boolean;
    hearingAccessibleDoorbellException?: LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum;
    hearingAccessibleFireAlarm?: boolean;
    hearingAccessibleFireAlarmException?: LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum;
    hearingAccessibleUnit?: boolean;
    hearingAccessibleUnitException?: LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum;
    mobilityAccessibleBathtub?: boolean;
    mobilityAccessibleBathtubException?: LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum;
    mobilityAccessibleShower?: boolean;
    mobilityAccessibleShowerException?: LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum;
    mobilityAccessibleToilet?: boolean;
    mobilityAccessibleToiletException?: LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum;
    mobilityAccessibleUnit?: boolean;
    mobilityAccessibleUnitException?: LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum;
}
