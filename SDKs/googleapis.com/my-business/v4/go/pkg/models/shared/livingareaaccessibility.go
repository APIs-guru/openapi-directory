package shared

type LivingAreaAccessibilityAdaCompliantUnitExceptionEnum string

const (
	LivingAreaAccessibilityAdaCompliantUnitExceptionEnumExceptionUnspecified LivingAreaAccessibilityAdaCompliantUnitExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityAdaCompliantUnitExceptionEnumUnderConstruction    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityAdaCompliantUnitExceptionEnumDependentOnSeason    LivingAreaAccessibilityAdaCompliantUnitExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityAdaCompliantUnitExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityAdaCompliantUnitExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum string

const (
	LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnumExceptionUnspecified LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnumUnderConstruction    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnumDependentOnSeason    LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum string

const (
	LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnumExceptionUnspecified LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnumUnderConstruction    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnumDependentOnSeason    LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum string

const (
	LivingAreaAccessibilityHearingAccessibleUnitExceptionEnumExceptionUnspecified LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityHearingAccessibleUnitExceptionEnumUnderConstruction    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityHearingAccessibleUnitExceptionEnumDependentOnSeason    LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityHearingAccessibleUnitExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum string

const (
	LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnumExceptionUnspecified LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnumUnderConstruction    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnumDependentOnSeason    LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum string

const (
	LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnumExceptionUnspecified LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnumUnderConstruction    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnumDependentOnSeason    LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum string

const (
	LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnumExceptionUnspecified LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnumUnderConstruction    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnumDependentOnSeason    LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum string

const (
	LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnumExceptionUnspecified LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnumUnderConstruction    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnumDependentOnSeason    LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnumDependentOnDayOfWeek LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaAccessibility struct {
	AdaCompliantUnit                    *bool                                                           `json:"adaCompliantUnit"`
	AdaCompliantUnitException           *LivingAreaAccessibilityAdaCompliantUnitExceptionEnum           `json:"adaCompliantUnitException"`
	HearingAccessibleDoorbell           *bool                                                           `json:"hearingAccessibleDoorbell"`
	HearingAccessibleDoorbellException  *LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum  `json:"hearingAccessibleDoorbellException"`
	HearingAccessibleFireAlarm          *bool                                                           `json:"hearingAccessibleFireAlarm"`
	HearingAccessibleFireAlarmException *LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum `json:"hearingAccessibleFireAlarmException"`
	HearingAccessibleUnit               *bool                                                           `json:"hearingAccessibleUnit"`
	HearingAccessibleUnitException      *LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum      `json:"hearingAccessibleUnitException"`
	MobilityAccessibleBathtub           *bool                                                           `json:"mobilityAccessibleBathtub"`
	MobilityAccessibleBathtubException  *LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum  `json:"mobilityAccessibleBathtubException"`
	MobilityAccessibleShower            *bool                                                           `json:"mobilityAccessibleShower"`
	MobilityAccessibleShowerException   *LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum   `json:"mobilityAccessibleShowerException"`
	MobilityAccessibleToilet            *bool                                                           `json:"mobilityAccessibleToilet"`
	MobilityAccessibleToiletException   *LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum   `json:"mobilityAccessibleToiletException"`
	MobilityAccessibleUnit              *bool                                                           `json:"mobilityAccessibleUnit"`
	MobilityAccessibleUnitException     *LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum     `json:"mobilityAccessibleUnitException"`
}
