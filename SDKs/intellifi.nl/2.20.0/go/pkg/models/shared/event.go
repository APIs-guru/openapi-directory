package shared

type EventTopic struct {
	Action       *EventTopicActionEnum       `json:"action"`
	Arguments    *interface{}                `json:"arguments"`
	ResourceID   *string                     `json:"resource_id"`
	ResourceType *EventTopicResourceTypeEnum `json:"resource_type"`
	ResourceURL  *string                     `json:"resource_url"`
}

type Event struct {
	ID          *string      `json:"id"`
	Payload     *interface{} `json:"payload"`
	TimeCreated *string      `json:"time_created"`
	TimeEvent   *string      `json:"time_event"`
	TimeExpire  *string      `json:"time_expire"`
	Topic       *EventTopic  `json:"topic"`
	URL         *string      `json:"url"`
}
