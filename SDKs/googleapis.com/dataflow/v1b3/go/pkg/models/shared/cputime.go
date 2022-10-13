package shared

type CPUTime struct {
	Rate      *float64 `json:"rate"`
	Timestamp *string  `json:"timestamp"`
	TotalMs   *string  `json:"totalMs"`
}
