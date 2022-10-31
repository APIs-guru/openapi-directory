package shared

type ApprovalResultDecisionEnum string

const (
	ApprovalResultDecisionEnumDecisionUnspecified ApprovalResultDecisionEnum = "DECISION_UNSPECIFIED"
	ApprovalResultDecisionEnumApproved            ApprovalResultDecisionEnum = "APPROVED"
	ApprovalResultDecisionEnumRejected            ApprovalResultDecisionEnum = "REJECTED"
)

type ApprovalResult struct {
	ApprovalTime    *string                     `json:"approvalTime,omitempty"`
	ApproverAccount *string                     `json:"approverAccount,omitempty"`
	Comment         *string                     `json:"comment,omitempty"`
	Decision        *ApprovalResultDecisionEnum `json:"decision,omitempty"`
	URL             *string                     `json:"url,omitempty"`
}
