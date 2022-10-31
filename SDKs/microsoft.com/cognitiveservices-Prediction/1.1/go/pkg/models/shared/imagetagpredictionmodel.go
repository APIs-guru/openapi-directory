package shared

type ImageTagPredictionModel struct {
	Probability *float32 `json:"Probability,omitempty"`
	Tag         *string  `json:"Tag,omitempty"`
	TagID       *string  `json:"TagId,omitempty"`
}
