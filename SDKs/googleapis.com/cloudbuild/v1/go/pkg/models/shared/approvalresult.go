package shared

type ApprovalResultDecisionEnum string

const (
	ApprovalResultDecisionEnumDecisionUnspecified ApprovalResultDecisionEnum = "DECISION_UNSPECIFIED"
	ApprovalResultDecisionEnumApproved            ApprovalResultDecisionEnum = "APPROVED"
	ApprovalResultDecisionEnumRejected            ApprovalResultDecisionEnum = "REJECTED"
)

// ApprovalResultInput
// ApprovalResult describes the decision and associated metadata of a manual approval of a build.
type ApprovalResultInput struct {
	Comment  *string                     `json:"comment,omitempty"`
	Decision *ApprovalResultDecisionEnum `json:"decision,omitempty"`
	URL      *string                     `json:"url,omitempty"`
}

// ApprovalResult
// ApprovalResult describes the decision and associated metadata of a manual approval of a build.
type ApprovalResult struct {
	ApprovalTime    *string                     `json:"approvalTime,omitempty"`
	ApproverAccount *string                     `json:"approverAccount,omitempty"`
	Comment         *string                     `json:"comment,omitempty"`
	Decision        *ApprovalResultDecisionEnum `json:"decision,omitempty"`
	URL             *string                     `json:"url,omitempty"`
}
