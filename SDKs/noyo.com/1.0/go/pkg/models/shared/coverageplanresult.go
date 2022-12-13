package shared

// CoveragePlanResultCobraRules
// COBRA rules for the group medical plan
type CoveragePlanResultCobraRules struct {
	Eligible *bool `json:"eligible,omitempty"`
}

type CoveragePlanResult struct {
	BenefitDetails      []string                      `json:"benefit_details,omitempty"`
	CobraRules          *CoveragePlanResultCobraRules `json:"cobra_rules,omitempty"`
	Code                *string                       `json:"code,omitempty"`
	ContributionDetails []ContributionDetails         `json:"contribution_details,omitempty"`
	CoverageDetails     *CoverageDetails              `json:"coverage_details,omitempty"`
	Created             int64                         `json:"created"`
	ExistingPlan        *bool                         `json:"existing_plan,omitempty"`
	GroupCoverageID     string                        `json:"group_coverage_id"`
	ID                  string                        `json:"id"`
	Modified            int64                         `json:"modified"`
	Network             *string                       `json:"network,omitempty"`
	Notes               *string                       `json:"notes,omitempty"`
	PlanName            string                        `json:"plan_name"`
	PlanType            *string                       `json:"plan_type,omitempty"`
	ProductType         *string                       `json:"product_type,omitempty"`
	RateDetails         []RateModel                   `json:"rate_details,omitempty"`
	TerminationPolicy   *string                       `json:"termination_policy,omitempty"`
	Version             string                        `json:"version"`
	VolumeRules         *string                       `json:"volume_rules,omitempty"`
	WaitingPeriodRules  []string                      `json:"waiting_period_rules,omitempty"`
}
