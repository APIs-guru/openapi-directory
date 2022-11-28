package shared

// LocalPostEvent
// All the information pertaining to an event featured in a local post.
type LocalPostEvent struct {
	Schedule *TimeInterval `json:"schedule,omitempty"`
	Title    *string       `json:"title,omitempty"`
}
