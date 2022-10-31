package shared

type Feature struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Value      *string  `json:"value,omitempty"`
}
