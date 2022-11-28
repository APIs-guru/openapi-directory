package shared

// TimestampedEvent
// An event that occured in the operation assigned to the worker and the time of occurance.
type TimestampedEvent struct {
	Data      map[string]interface{} `json:"data,omitempty"`
	Timestamp *string                `json:"timestamp,omitempty"`
}
