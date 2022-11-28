package shared

type ProvisioningIssueReasonEnum string

const (
	ProvisioningIssueReasonEnumReasonUnspecified  ProvisioningIssueReasonEnum = "REASON_UNSPECIFIED"
	ProvisioningIssueReasonEnumAuthorizationIssue ProvisioningIssueReasonEnum = "AUTHORIZATION_ISSUE"
	ProvisioningIssueReasonEnumRateLimited        ProvisioningIssueReasonEnum = "RATE_LIMITED"
)

// ProvisioningIssue
// Information about issues with provisioning a Managed Certificate.
type ProvisioningIssue struct {
	Details *string                      `json:"details,omitempty"`
	Reason  *ProvisioningIssueReasonEnum `json:"reason,omitempty"`
}
