package shared

type AnalyzeEntitiesResponse struct {
	Entities []Entity `json:"entities"`
	Language *string  `json:"language"`
}
