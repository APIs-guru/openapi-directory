package shared

type FileMiniV1StatusEnum string

const (
	FileMiniV1StatusEnumAvailable FileMiniV1StatusEnum = "available"
	FileMiniV1StatusEnumDeleted   FileMiniV1StatusEnum = "deleted"
)

type FileMiniV1TypeEnum string

const (
	FileMiniV1TypeEnumQuoteSummary       FileMiniV1TypeEnum = "quote_summary"
	FileMiniV1TypeEnumPolicySpecimen     FileMiniV1TypeEnum = "policy_specimen"
	FileMiniV1TypeEnumCyberRiskAssement  FileMiniV1TypeEnum = "cyber_risk_assement"
	FileMiniV1TypeEnumApplicationSummary FileMiniV1TypeEnum = "application_summary"
)

// FileMiniV1
// A mini representation of a file, used when nested within another response.
type FileMiniV1 struct {
	ID     *string               `json:"id,omitempty"`
	Status *FileMiniV1StatusEnum `json:"status,omitempty"`
	Text   *string               `json:"text,omitempty"`
	Type   *FileMiniV1TypeEnum   `json:"type,omitempty"`
}
