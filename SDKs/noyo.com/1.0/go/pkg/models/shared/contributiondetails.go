package shared

type ContributionDetailsContributionRuleTypeEnum string

const (
	ContributionDetailsContributionRuleTypeEnumFixedDollar ContributionDetailsContributionRuleTypeEnum = "fixed_dollar"
	ContributionDetailsContributionRuleTypeEnumPercent     ContributionDetailsContributionRuleTypeEnum = "percent"
)

type ContributionDetailsContributionSourceEnum string

const (
	ContributionDetailsContributionSourceEnumEmployeeAmount ContributionDetailsContributionSourceEnum = "employee_amount"
	ContributionDetailsContributionSourceEnumEmployerAmount ContributionDetailsContributionSourceEnum = "employer_amount"
)

type ContributionDetailsContributionTargetEnum string

const (
	ContributionDetailsContributionTargetEnumDependents ContributionDetailsContributionTargetEnum = "dependents"
	ContributionDetailsContributionTargetEnumEmployee   ContributionDetailsContributionTargetEnum = "employee"
)

type ContributionDetails struct {
	ContributionRule     string                                      `json:"contribution_rule"`
	ContributionRuleType ContributionDetailsContributionRuleTypeEnum `json:"contribution_rule_type"`
	ContributionSource   ContributionDetailsContributionSourceEnum   `json:"contribution_source"`
	ContributionTarget   ContributionDetailsContributionTargetEnum   `json:"contribution_target"`
}
