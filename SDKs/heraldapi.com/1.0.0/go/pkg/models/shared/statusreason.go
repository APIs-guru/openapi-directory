package shared

// StatusReason
// This will be returned when the status is declined, referred, or unsupported. When the source is "Carrier" the status reason is from the integrated carrier. When the source is "API", the reason has been cleaned by Herald.
type StatusReason struct {
	Reason *string `json:"reason,omitempty"`
	Source *string `json:"source,omitempty"`
}
