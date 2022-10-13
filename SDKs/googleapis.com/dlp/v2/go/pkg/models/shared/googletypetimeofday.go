package shared

type GoogleTypeTimeOfDay struct {
	Hours   *int32 `json:"hours"`
	Minutes *int32 `json:"minutes"`
	Nanos   *int32 `json:"nanos"`
	Seconds *int32 `json:"seconds"`
}
