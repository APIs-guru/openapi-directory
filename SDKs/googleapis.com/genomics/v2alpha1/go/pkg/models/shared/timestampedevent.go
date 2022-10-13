package shared

type TimestampedEvent struct {
	Data      map[string]interface{} `json:"data"`
	Timestamp *string                `json:"timestamp"`
}
