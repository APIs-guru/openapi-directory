package shared

// AnalyzeEntitiesResponse
// The entity analysis response message.
type AnalyzeEntitiesResponse struct {
	Entities []Entity `json:"entities,omitempty"`
	Language *string  `json:"language,omitempty"`
}
