package shared

type AuditRefs struct {
	Acronym        *string  `json:"acronym,omitempty"`
	Group          *string  `json:"group,omitempty"`
	ID             *string  `json:"id,omitempty"`
	RelevantAudits []string `json:"relevantAudits,omitempty"`
	Weight         *float64 `json:"weight,omitempty"`
}
