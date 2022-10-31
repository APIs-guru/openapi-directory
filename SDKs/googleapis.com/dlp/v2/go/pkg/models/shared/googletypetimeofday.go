package shared

type GoogleTypeTimeOfDay struct {
	Hours   *int32 `json:"hours,omitempty"`
	Minutes *int32 `json:"minutes,omitempty"`
	Nanos   *int32 `json:"nanos,omitempty"`
	Seconds *int32 `json:"seconds,omitempty"`
}
