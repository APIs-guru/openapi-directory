package shared

type Timepoint struct {
	MarkName    *string  `json:"markName,omitempty"`
	TimeSeconds *float64 `json:"timeSeconds,omitempty"`
}
