package shared

type LookbackWindow struct {
	ClickDays      *int32 `json:"clickDays,omitempty"`
	ImpressionDays *int32 `json:"impressionDays,omitempty"`
}
