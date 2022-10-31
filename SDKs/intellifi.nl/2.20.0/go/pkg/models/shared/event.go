package shared



type EventTopic struct {
    Action *EventTopicActionEnum `json:"action,omitempty"`
    Arguments *interface{} `json:"arguments,omitempty"`
    ResourceID *string `json:"resource_id,omitempty"`
    ResourceType *EventTopicResourceTypeEnum `json:"resource_type,omitempty"`
    ResourceURL *string `json:"resource_url,omitempty"`
    
}

type Event struct {
    ID *string `json:"id,omitempty"`
    Payload *interface{} `json:"payload,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeEvent *string `json:"time_event,omitempty"`
    TimeExpire *string `json:"time_expire,omitempty"`
    Topic *EventTopic `json:"topic,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

