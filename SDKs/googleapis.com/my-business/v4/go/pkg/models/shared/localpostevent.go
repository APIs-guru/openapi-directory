package shared

type LocalPostEvent struct {
	Schedule *TimeInterval `json:"schedule,omitempty"`
	Title    *string       `json:"title,omitempty"`
}
