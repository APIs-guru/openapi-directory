package shared

type PolicyComplianceStatusEnum string

const (
	PolicyComplianceStatusEnumStatusUnspecified   PolicyComplianceStatusEnum = "STATUS_UNSPECIFIED"
	PolicyComplianceStatusEnumPendingReview       PolicyComplianceStatusEnum = "PENDING_REVIEW"
	PolicyComplianceStatusEnumDisapproved         PolicyComplianceStatusEnum = "DISAPPROVED"
	PolicyComplianceStatusEnumApproved            PolicyComplianceStatusEnum = "APPROVED"
	PolicyComplianceStatusEnumCertificateRequired PolicyComplianceStatusEnum = "CERTIFICATE_REQUIRED"
)

// PolicyCompliance
// Policy compliance of the creative for a transaction type or a region.
type PolicyCompliance struct {
	Status *PolicyComplianceStatusEnum `json:"status,omitempty"`
	Topics []PolicyTopicEntry          `json:"topics,omitempty"`
}
