package shared

type AuditRefs struct {
	Acronym        *string  `json:"acronym"`
	Group          *string  `json:"group"`
	ID             *string  `json:"id"`
	RelevantAudits []string `json:"relevantAudits"`
	Weight         *float64 `json:"weight"`
}
