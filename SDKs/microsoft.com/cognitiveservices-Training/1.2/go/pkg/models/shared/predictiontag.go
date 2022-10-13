package shared

type PredictionTag struct {
	Probability *float32 `json:"Probability"`
	Tag         *string  `json:"Tag"`
	TagID       *string  `json:"TagId"`
}
