package shared

type PredictionTag struct {
	Probability *float32 `json:"Probability,omitempty"`
	Tag         *string  `json:"Tag,omitempty"`
	TagID       *string  `json:"TagId,omitempty"`
}
