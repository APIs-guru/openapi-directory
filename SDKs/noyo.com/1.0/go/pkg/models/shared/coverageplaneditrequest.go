package shared

// CoveragePlanEditRequestCobraRules
// COBRA rules for the group medical plan
type CoveragePlanEditRequestCobraRules struct {
	Eligible *bool `json:"eligible,omitempty"`
}

type CoveragePlanEditRequest struct {
	BenefitDetails      []string                           `json:"benefit_details,omitempty"`
	CobraRules          *CoveragePlanEditRequestCobraRules `json:"cobra_rules,omitempty"`
	Code                *string                            `json:"code,omitempty"`
	ContributionDetails []ContributionDetails              `json:"contribution_details,omitempty"`
	CoverageDetails     *CoverageDetails                   `json:"coverage_details,omitempty"`
	ExistingPlan        *bool                              `json:"existing_plan,omitempty"`
	Network             *string                            `json:"network,omitempty"`
	Notes               *string                            `json:"notes,omitempty"`
	PlanName            *string                            `json:"plan_name,omitempty"`
	PlanType            *string                            `json:"plan_type,omitempty"`
	ProductType         *string                            `json:"product_type,omitempty"`
	RateDetails         []RateModel                        `json:"rate_details,omitempty"`
	TerminationPolicy   *string                            `json:"termination_policy,omitempty"`
	VolumeRules         *string                            `json:"volume_rules,omitempty"`
	WaitingPeriodRules  []string                           `json:"waiting_period_rules,omitempty"`
}
