package shared

type Point struct {
	Time  *string  `json:"time,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
