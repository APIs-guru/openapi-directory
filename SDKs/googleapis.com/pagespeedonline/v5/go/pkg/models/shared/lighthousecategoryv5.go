package shared

type LighthouseCategoryV5 struct {
	AuditRefs         []AuditRefs  `json:"auditRefs"`
	Description       *string      `json:"description"`
	ID                *string      `json:"id"`
	ManualDescription *string      `json:"manualDescription"`
	Score             *interface{} `json:"score"`
	Title             *string      `json:"title"`
}
