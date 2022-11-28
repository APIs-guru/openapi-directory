package shared

// StatementTemplate
// A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
type StatementTemplate struct {
	Relation *string `json:"relation,omitempty"`
	Source   *Asset  `json:"source,omitempty"`
	Target   *Asset  `json:"target,omitempty"`
}
