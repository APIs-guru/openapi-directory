package shared

type Feature struct {
	Confidence *float64 `json:"confidence"`
	Value      *string  `json:"value"`
}
