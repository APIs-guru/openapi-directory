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
	Details    map[string]string `json:"details"`
	ReportTime *string           `json:"reportTime"`
	Type       *EventTypeEnum    `json:"type"`
}
