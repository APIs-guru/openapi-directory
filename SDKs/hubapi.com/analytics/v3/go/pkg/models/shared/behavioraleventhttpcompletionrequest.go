package shared

import (
	"time"
)

type BehavioralEventHTTPCompletionRequest struct {
	Email      *string           `json:"email,omitempty"`
	EventName  string            `json:"eventName"`
	ObjectID   *string           `json:"objectId,omitempty"`
	OccurredAt *time.Time        `json:"occurredAt,omitempty"`
	Properties map[string]string `json:"properties"`
	Utk        *string           `json:"utk,omitempty"`
}
