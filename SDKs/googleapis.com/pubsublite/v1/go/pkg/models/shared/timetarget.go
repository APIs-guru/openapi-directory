package shared

type TimeTarget struct {
	EventTime   *string `json:"eventTime,omitempty"`
	PublishTime *string `json:"publishTime,omitempty"`
}
