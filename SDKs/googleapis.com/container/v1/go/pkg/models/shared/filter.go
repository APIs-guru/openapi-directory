package shared

type FilterEventTypeEnum string

const (
	FilterEventTypeEnumEventTypeUnspecified  FilterEventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	FilterEventTypeEnumUpgradeAvailableEvent FilterEventTypeEnum = "UPGRADE_AVAILABLE_EVENT"
	FilterEventTypeEnumUpgradeEvent          FilterEventTypeEnum = "UPGRADE_EVENT"
	FilterEventTypeEnumSecurityBulletinEvent FilterEventTypeEnum = "SECURITY_BULLETIN_EVENT"
)

// Filter
// Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
type Filter struct {
	EventType []FilterEventTypeEnum `json:"eventType,omitempty"`
}
