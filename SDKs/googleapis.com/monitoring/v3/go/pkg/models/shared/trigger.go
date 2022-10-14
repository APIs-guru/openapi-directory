package shared

type Trigger struct {
	Count   *int32   `json:"count,omitempty"`
	Percent *float64 `json:"percent,omitempty"`
}
