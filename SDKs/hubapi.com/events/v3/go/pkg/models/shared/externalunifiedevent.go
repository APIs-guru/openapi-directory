package shared

import (
	"time"
)

type ExternalUnifiedEvent struct {
	EventType  string            `json:"eventType"`
	ID         string            `json:"id"`
	ObjectID   string            `json:"objectId"`
	ObjectType string            `json:"objectType"`
	OccurredAt time.Time         `json:"occurredAt"`
	Properties map[string]string `json:"properties"`
}
