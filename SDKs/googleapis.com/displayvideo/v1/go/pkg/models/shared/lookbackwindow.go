package shared

// LookbackWindow
// Specifies how many days into the past to look when determining whether to record a conversion.
type LookbackWindow struct {
	ClickDays      *int32 `json:"clickDays,omitempty"`
	ImpressionDays *int32 `json:"impressionDays,omitempty"`
}
