package shared

type Date struct {
	Day   *int32 `json:"day,omitempty"`
	Month *int32 `json:"month,omitempty"`
	Year  *int32 `json:"year,omitempty"`
}
