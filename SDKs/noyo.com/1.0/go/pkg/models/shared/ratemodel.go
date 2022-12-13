package shared

type RateModelCoverageLevelEnum string

const (
	RateModelCoverageLevelEnumChild          RateModelCoverageLevelEnum = "Child"
	RateModelCoverageLevelEnumEe             RateModelCoverageLevelEnum = "EE"
	RateModelCoverageLevelEnumEePlus1        RateModelCoverageLevelEnum = "EE+1"
	RateModelCoverageLevelEnumEePlusChild    RateModelCoverageLevelEnum = "EE+Child"
	RateModelCoverageLevelEnumEePlusChildren RateModelCoverageLevelEnum = "EE+Children"
	RateModelCoverageLevelEnumEePlusSpouse   RateModelCoverageLevelEnum = "EE+Spouse"
	RateModelCoverageLevelEnumFamily         RateModelCoverageLevelEnum = "Family"
	RateModelCoverageLevelEnumPmpm           RateModelCoverageLevelEnum = "PMPM"
	RateModelCoverageLevelEnumSpouse         RateModelCoverageLevelEnum = "Spouse"
)

type RateModel struct {
	Amount        float64                    `json:"amount"`
	CoverageLevel RateModelCoverageLevelEnum `json:"coverage_level"`
	Period        TimePeriod                 `json:"period"`
}
