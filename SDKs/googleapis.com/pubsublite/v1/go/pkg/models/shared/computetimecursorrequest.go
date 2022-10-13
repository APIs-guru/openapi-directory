package shared

type ComputeTimeCursorRequest struct {
	Partition *string     `json:"partition"`
	Target    *TimeTarget `json:"target"`
}
