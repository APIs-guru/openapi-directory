package shared

type EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum string

const (
	EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnumExceptionUnspecified EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnumUnderConstruction    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnumDependentOnSeason    EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnumDependentOnDayOfWeek EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyEnergyConservationProgramExceptionEnum string

const (
	EnergyEfficiencyEnergyConservationProgramExceptionEnumExceptionUnspecified EnergyEfficiencyEnergyConservationProgramExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyEnergyConservationProgramExceptionEnumUnderConstruction    EnergyEfficiencyEnergyConservationProgramExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyEnergyConservationProgramExceptionEnumDependentOnSeason    EnergyEfficiencyEnergyConservationProgramExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyEnergyConservationProgramExceptionEnumDependentOnDayOfWeek EnergyEfficiencyEnergyConservationProgramExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum string

const (
	EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnumExceptionUnspecified EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnumUnderConstruction    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnumDependentOnSeason    EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnumDependentOnDayOfWeek EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyEnergyEfficientLightingExceptionEnum string

const (
	EnergyEfficiencyEnergyEfficientLightingExceptionEnumExceptionUnspecified EnergyEfficiencyEnergyEfficientLightingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyEnergyEfficientLightingExceptionEnumUnderConstruction    EnergyEfficiencyEnergyEfficientLightingExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyEnergyEfficientLightingExceptionEnumDependentOnSeason    EnergyEfficiencyEnergyEfficientLightingExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyEnergyEfficientLightingExceptionEnumDependentOnDayOfWeek EnergyEfficiencyEnergyEfficientLightingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyEnergySavingThermostatsExceptionEnum string

const (
	EnergyEfficiencyEnergySavingThermostatsExceptionEnumExceptionUnspecified EnergyEfficiencyEnergySavingThermostatsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyEnergySavingThermostatsExceptionEnumUnderConstruction    EnergyEfficiencyEnergySavingThermostatsExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyEnergySavingThermostatsExceptionEnumDependentOnSeason    EnergyEfficiencyEnergySavingThermostatsExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyEnergySavingThermostatsExceptionEnumDependentOnDayOfWeek EnergyEfficiencyEnergySavingThermostatsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyGreenBuildingDesignExceptionEnum string

const (
	EnergyEfficiencyGreenBuildingDesignExceptionEnumExceptionUnspecified EnergyEfficiencyGreenBuildingDesignExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyGreenBuildingDesignExceptionEnumUnderConstruction    EnergyEfficiencyGreenBuildingDesignExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyGreenBuildingDesignExceptionEnumDependentOnSeason    EnergyEfficiencyGreenBuildingDesignExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyGreenBuildingDesignExceptionEnumDependentOnDayOfWeek EnergyEfficiencyGreenBuildingDesignExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum string

const (
	EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnumExceptionUnspecified EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnumUnderConstruction    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum = "UNDER_CONSTRUCTION"
	EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnumDependentOnSeason    EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum = "DEPENDENT_ON_SEASON"
	EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnumDependentOnDayOfWeek EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnergyEfficiency struct {
	CarbonFreeEnergySources                          *bool                                                                 `json:"carbonFreeEnergySources"`
	CarbonFreeEnergySourcesException                 *EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum                 `json:"carbonFreeEnergySourcesException"`
	EnergyConservationProgram                        *bool                                                                 `json:"energyConservationProgram"`
	EnergyConservationProgramException               *EnergyEfficiencyEnergyConservationProgramExceptionEnum               `json:"energyConservationProgramException"`
	EnergyEfficientHeatingAndCoolingSystems          *bool                                                                 `json:"energyEfficientHeatingAndCoolingSystems"`
	EnergyEfficientHeatingAndCoolingSystemsException *EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum `json:"energyEfficientHeatingAndCoolingSystemsException"`
	EnergyEfficientLighting                          *bool                                                                 `json:"energyEfficientLighting"`
	EnergyEfficientLightingException                 *EnergyEfficiencyEnergyEfficientLightingExceptionEnum                 `json:"energyEfficientLightingException"`
	EnergySavingThermostats                          *bool                                                                 `json:"energySavingThermostats"`
	EnergySavingThermostatsException                 *EnergyEfficiencyEnergySavingThermostatsExceptionEnum                 `json:"energySavingThermostatsException"`
	GreenBuildingDesign                              *bool                                                                 `json:"greenBuildingDesign"`
	GreenBuildingDesignException                     *EnergyEfficiencyGreenBuildingDesignExceptionEnum                     `json:"greenBuildingDesignException"`
	IndependentOrganizationAuditsEnergyUse           *bool                                                                 `json:"independentOrganizationAuditsEnergyUse"`
	IndependentOrganizationAuditsEnergyUseException  *EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum  `json:"independentOrganizationAuditsEnergyUseException"`
}
