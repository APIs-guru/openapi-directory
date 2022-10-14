package shared

type Notification struct {
	CustomAttributes map[string]string `json:"custom_attributes,omitempty"`
	Etag             *string           `json:"etag,omitempty"`
	EventTypes       []string          `json:"event_types,omitempty"`
	ID               *string           `json:"id,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	ObjectNamePrefix *string           `json:"object_name_prefix,omitempty"`
	PayloadFormat    *string           `json:"payload_format,omitempty"`
	SelfLink         *string           `json:"selfLink,omitempty"`
	Topic            *string           `json:"topic,omitempty"`
}
