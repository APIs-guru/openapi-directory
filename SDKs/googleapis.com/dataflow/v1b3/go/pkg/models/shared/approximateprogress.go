package shared

type ApproximateProgress struct {
	PercentComplete *float32  `json:"percentComplete"`
	Position        *Position `json:"position"`
	RemainingTime   *string   `json:"remainingTime"`
}
