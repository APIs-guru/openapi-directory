package shared

type LookbackWindow struct {
	ClickDays      *int32 `json:"clickDays"`
	ImpressionDays *int32 `json:"impressionDays"`
}
