package shared

type FilterEventTypeEnum string

const (
	FilterEventTypeEnumEventTypeUnspecified  FilterEventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	FilterEventTypeEnumUpgradeAvailableEvent FilterEventTypeEnum = "UPGRADE_AVAILABLE_EVENT"
	FilterEventTypeEnumUpgradeEvent          FilterEventTypeEnum = "UPGRADE_EVENT"
	FilterEventTypeEnumSecurityBulletinEvent FilterEventTypeEnum = "SECURITY_BULLETIN_EVENT"
)

type Filter struct {
	EventType []FilterEventTypeEnum `json:"eventType,omitempty"`
}
