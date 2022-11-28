package shared

type EventTypeEnum string

const (
	EventTypeEnumEventTypeUnspecified EventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	EventTypeEnumIdle                 EventTypeEnum = "IDLE"
	EventTypeEnumHeartbeat            EventTypeEnum = "HEARTBEAT"
	EventTypeEnumHealth               EventTypeEnum = "HEALTH"
	EventTypeEnumMaintenance          EventTypeEnum = "MAINTENANCE"
)

// Event
// The definition of an Event for a managed / semi-managed notebook instance.
type Event struct {
	Details    map[string]string `json:"details,omitempty"`
	ReportTime *string           `json:"reportTime,omitempty"`
	Type       *EventTypeEnum    `json:"type,omitempty"`
}
