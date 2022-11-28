package shared

// TimeTarget
// A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.
type TimeTarget struct {
	EventTime   *string `json:"eventTime,omitempty"`
	PublishTime *string `json:"publishTime,omitempty"`
}
