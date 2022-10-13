package shared

type ProvisioningIssueReasonEnum string

const (
	ProvisioningIssueReasonEnumReasonUnspecified  ProvisioningIssueReasonEnum = "REASON_UNSPECIFIED"
	ProvisioningIssueReasonEnumAuthorizationIssue ProvisioningIssueReasonEnum = "AUTHORIZATION_ISSUE"
	ProvisioningIssueReasonEnumRateLimited        ProvisioningIssueReasonEnum = "RATE_LIMITED"
)

type ProvisioningIssue struct {
	Details *string                      `json:"details"`
	Reason  *ProvisioningIssueReasonEnum `json:"reason"`
}
