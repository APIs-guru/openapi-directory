package shared

// CoveragePlanCreateRequestCobraRules
// COBRA rules for the group medical plan
type CoveragePlanCreateRequestCobraRules struct {
	Eligible *bool `json:"eligible,omitempty"`
}

type CoveragePlanCreateRequest struct {
	BenefitDetails      []string                             `json:"benefit_details,omitempty"`
	CobraRules          *CoveragePlanCreateRequestCobraRules `json:"cobra_rules,omitempty"`
	Code                *string                              `json:"code,omitempty"`
	ContributionDetails []ContributionDetails                `json:"contribution_details,omitempty"`
	CoverageDetails     *CoverageDetails                     `json:"coverage_details,omitempty"`
	ExistingPlan        *bool                                `json:"existing_plan,omitempty"`
	Network             *string                              `json:"network,omitempty"`
	Notes               *string                              `json:"notes,omitempty"`
	PlanName            string                               `json:"plan_name"`
	PlanType            *string                              `json:"plan_type,omitempty"`
	ProductType         *string                              `json:"product_type,omitempty"`
	RateDetails         []RateModel                          `json:"rate_details,omitempty"`
	TerminationPolicy   *string                              `json:"termination_policy,omitempty"`
	VolumeRules         *string                              `json:"volume_rules,omitempty"`
	WaitingPeriodRules  []string                             `json:"waiting_period_rules,omitempty"`
}
