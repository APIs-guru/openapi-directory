package shared

// FixedOrPercent
// Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
type FixedOrPercent struct {
	Fixed   *int32 `json:"fixed,omitempty"`
	Percent *int32 `json:"percent,omitempty"`
}
