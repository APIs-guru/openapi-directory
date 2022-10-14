package shared

type AnalyzeEntitiesResponse struct {
	Entities []Entity `json:"entities,omitempty"`
	Language *string  `json:"language,omitempty"`
}
