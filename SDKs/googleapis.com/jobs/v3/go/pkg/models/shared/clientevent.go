package shared

type ClientEvent struct {
	CreateTime    *string           `json:"createTime"`
	EventID       *string           `json:"eventId"`
	ExtraInfo     map[string]string `json:"extraInfo"`
	JobEvent      *JobEvent         `json:"jobEvent"`
	ParentEventID *string           `json:"parentEventId"`
	RequestID     *string           `json:"requestId"`
}
