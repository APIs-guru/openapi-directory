package shared

type TimestampedEvent struct {
	Data      map[string]interface{} `json:"data,omitempty"`
	Timestamp *string                `json:"timestamp,omitempty"`
}
