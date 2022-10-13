package shared

type LocalPostEvent struct {
	Schedule *TimeInterval `json:"schedule"`
	Title    *string       `json:"title"`
}
