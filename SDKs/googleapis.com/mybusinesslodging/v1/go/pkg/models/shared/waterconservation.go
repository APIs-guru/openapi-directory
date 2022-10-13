package shared

type WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum string

const (
	WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnumExceptionUnspecified WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnumUnderConstruction    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnumDependentOnSeason    WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnumDependentOnDayOfWeek WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservationLinenReuseProgramExceptionEnum string

const (
	WaterConservationLinenReuseProgramExceptionEnumExceptionUnspecified WaterConservationLinenReuseProgramExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationLinenReuseProgramExceptionEnumUnderConstruction    WaterConservationLinenReuseProgramExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationLinenReuseProgramExceptionEnumDependentOnSeason    WaterConservationLinenReuseProgramExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationLinenReuseProgramExceptionEnumDependentOnDayOfWeek WaterConservationLinenReuseProgramExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservationTowelReuseProgramExceptionEnum string

const (
	WaterConservationTowelReuseProgramExceptionEnumExceptionUnspecified WaterConservationTowelReuseProgramExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationTowelReuseProgramExceptionEnumUnderConstruction    WaterConservationTowelReuseProgramExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationTowelReuseProgramExceptionEnumDependentOnSeason    WaterConservationTowelReuseProgramExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationTowelReuseProgramExceptionEnumDependentOnDayOfWeek WaterConservationTowelReuseProgramExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservationWaterSavingShowersExceptionEnum string

const (
	WaterConservationWaterSavingShowersExceptionEnumExceptionUnspecified WaterConservationWaterSavingShowersExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationWaterSavingShowersExceptionEnumUnderConstruction    WaterConservationWaterSavingShowersExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationWaterSavingShowersExceptionEnumDependentOnSeason    WaterConservationWaterSavingShowersExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationWaterSavingShowersExceptionEnumDependentOnDayOfWeek WaterConservationWaterSavingShowersExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservationWaterSavingSinksExceptionEnum string

const (
	WaterConservationWaterSavingSinksExceptionEnumExceptionUnspecified WaterConservationWaterSavingSinksExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationWaterSavingSinksExceptionEnumUnderConstruction    WaterConservationWaterSavingSinksExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationWaterSavingSinksExceptionEnumDependentOnSeason    WaterConservationWaterSavingSinksExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationWaterSavingSinksExceptionEnumDependentOnDayOfWeek WaterConservationWaterSavingSinksExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservationWaterSavingToiletsExceptionEnum string

const (
	WaterConservationWaterSavingToiletsExceptionEnumExceptionUnspecified WaterConservationWaterSavingToiletsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WaterConservationWaterSavingToiletsExceptionEnumUnderConstruction    WaterConservationWaterSavingToiletsExceptionEnum = "UNDER_CONSTRUCTION"
	WaterConservationWaterSavingToiletsExceptionEnumDependentOnSeason    WaterConservationWaterSavingToiletsExceptionEnum = "DEPENDENT_ON_SEASON"
	WaterConservationWaterSavingToiletsExceptionEnumDependentOnDayOfWeek WaterConservationWaterSavingToiletsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WaterConservation struct {
	IndependentOrganizationAuditsWaterUse          *bool                                                                `json:"independentOrganizationAuditsWaterUse"`
	IndependentOrganizationAuditsWaterUseException *WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum `json:"independentOrganizationAuditsWaterUseException"`
	LinenReuseProgram                              *bool                                                                `json:"linenReuseProgram"`
	LinenReuseProgramException                     *WaterConservationLinenReuseProgramExceptionEnum                     `json:"linenReuseProgramException"`
	TowelReuseProgram                              *bool                                                                `json:"towelReuseProgram"`
	TowelReuseProgramException                     *WaterConservationTowelReuseProgramExceptionEnum                     `json:"towelReuseProgramException"`
	WaterSavingShowers                             *bool                                                                `json:"waterSavingShowers"`
	WaterSavingShowersException                    *WaterConservationWaterSavingShowersExceptionEnum                    `json:"waterSavingShowersException"`
	WaterSavingSinks                               *bool                                                                `json:"waterSavingSinks"`
	WaterSavingSinksException                      *WaterConservationWaterSavingSinksExceptionEnum                      `json:"waterSavingSinksException"`
	WaterSavingToilets                             *bool                                                                `json:"waterSavingToilets"`
	WaterSavingToiletsException                    *WaterConservationWaterSavingToiletsExceptionEnum                    `json:"waterSavingToiletsException"`
}
