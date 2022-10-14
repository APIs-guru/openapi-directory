package shared

type EventTypeEnum string

const (
	EventTypeEnumEventTypeUnspecified EventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	EventTypeEnumIdle                 EventTypeEnum = "IDLE"
	EventTypeEnumHeartbeat            EventTypeEnum = "HEARTBEAT"
	EventTypeEnumHealth               EventTypeEnum = "HEALTH"
	EventTypeEnumMaintenance          EventTypeEnum = "MAINTENANCE"
)

type Event struct {
	Details    map[string]string `json:"details,omitempty"`
	ReportTime *string           `json:"reportTime,omitempty"`
	Type       *EventTypeEnum    `json:"type,omitempty"`
}
