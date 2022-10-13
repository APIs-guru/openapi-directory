package shared

import (
	"time"
)

type BehavioralEventHTTPCompletionRequest struct {
	Email      *string           `json:"email"`
	EventName  string            `json:"eventName"`
	ObjectID   *string           `json:"objectId"`
	OccurredAt *time.Time        `json:"occurredAt"`
	Properties map[string]string `json:"properties"`
	Utk        *string           `json:"utk"`
}
