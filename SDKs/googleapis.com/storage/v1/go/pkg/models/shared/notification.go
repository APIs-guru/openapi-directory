package shared

type Notification struct {
	CustomAttributes map[string]string `json:"custom_attributes"`
	Etag             *string           `json:"etag"`
	EventTypes       []string          `json:"event_types"`
	ID               *string           `json:"id"`
	Kind             *string           `json:"kind"`
	ObjectNamePrefix *string           `json:"object_name_prefix"`
	PayloadFormat    *string           `json:"payload_format"`
	SelfLink         *string           `json:"selfLink"`
	Topic            *string           `json:"topic"`
}
