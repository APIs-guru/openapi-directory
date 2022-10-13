package shared

type ClassificationCategory struct {
	Confidence *float32 `json:"confidence"`
	Name       *string  `json:"name"`
}
