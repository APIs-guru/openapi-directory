package shared

// GoogleTypeTimeOfDay
// Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
type GoogleTypeTimeOfDay struct {
	Hours   *int32 `json:"hours,omitempty"`
	Minutes *int32 `json:"minutes,omitempty"`
	Nanos   *int32 `json:"nanos,omitempty"`
	Seconds *int32 `json:"seconds,omitempty"`
}
