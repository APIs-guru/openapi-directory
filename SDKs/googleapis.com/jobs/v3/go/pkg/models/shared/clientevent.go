package shared

type ClientEvent struct {
	CreateTime    *string           `json:"createTime,omitempty"`
	EventID       *string           `json:"eventId,omitempty"`
	ExtraInfo     map[string]string `json:"extraInfo,omitempty"`
	JobEvent      *JobEvent         `json:"jobEvent,omitempty"`
	ParentEventID *string           `json:"parentEventId,omitempty"`
	RequestID     *string           `json:"requestId,omitempty"`
}
