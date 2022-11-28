package shared

// ClientEvent
// An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
type ClientEvent struct {
	CreateTime *string   `json:"createTime,omitempty"`
	EventID    *string   `json:"eventId,omitempty"`
	EventNotes *string   `json:"eventNotes,omitempty"`
	JobEvent   *JobEvent `json:"jobEvent,omitempty"`
	RequestID  *string   `json:"requestId,omitempty"`
}
