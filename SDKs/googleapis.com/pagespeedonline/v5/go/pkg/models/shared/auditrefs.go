package shared

// AuditRefs
// A light reference to an audit by id, used to group and weight audits in a given category.
type AuditRefs struct {
	Acronym        *string  `json:"acronym,omitempty"`
	Group          *string  `json:"group,omitempty"`
	ID             *string  `json:"id,omitempty"`
	RelevantAudits []string `json:"relevantAudits,omitempty"`
	Weight         *float64 `json:"weight,omitempty"`
}
