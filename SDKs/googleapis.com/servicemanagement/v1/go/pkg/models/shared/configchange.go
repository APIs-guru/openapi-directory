package shared

type ConfigChangeChangeTypeEnum string

const (
	ConfigChangeChangeTypeEnumChangeTypeUnspecified ConfigChangeChangeTypeEnum = "CHANGE_TYPE_UNSPECIFIED"
	ConfigChangeChangeTypeEnumAdded                 ConfigChangeChangeTypeEnum = "ADDED"
	ConfigChangeChangeTypeEnumRemoved               ConfigChangeChangeTypeEnum = "REMOVED"
	ConfigChangeChangeTypeEnumModified              ConfigChangeChangeTypeEnum = "MODIFIED"
)

type ConfigChange struct {
	Advices    []Advice                    `json:"advices"`
	ChangeType *ConfigChangeChangeTypeEnum `json:"changeType"`
	Element    *string                     `json:"element"`
	NewValue   *string                     `json:"newValue"`
	OldValue   *string                     `json:"oldValue"`
}
