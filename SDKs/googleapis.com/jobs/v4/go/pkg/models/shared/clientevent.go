package shared

type ClientEvent struct {
	CreateTime *string   `json:"createTime"`
	EventID    *string   `json:"eventId"`
	EventNotes *string   `json:"eventNotes"`
	JobEvent   *JobEvent `json:"jobEvent"`
	RequestID  *string   `json:"requestId"`
}
