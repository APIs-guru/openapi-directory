package shared

type ApprovalResultDecisionEnum string

const (
	ApprovalResultDecisionEnumDecisionUnspecified ApprovalResultDecisionEnum = "DECISION_UNSPECIFIED"
	ApprovalResultDecisionEnumApproved            ApprovalResultDecisionEnum = "APPROVED"
	ApprovalResultDecisionEnumRejected            ApprovalResultDecisionEnum = "REJECTED"
)

type ApprovalResult struct {
	ApprovalTime    *string                     `json:"approvalTime"`
	ApproverAccount *string                     `json:"approverAccount"`
	Comment         *string                     `json:"comment"`
	Decision        *ApprovalResultDecisionEnum `json:"decision"`
	URL             *string                     `json:"url"`
}
