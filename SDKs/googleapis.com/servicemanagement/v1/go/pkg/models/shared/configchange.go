package shared

type ConfigChangeChangeTypeEnum string

const (
	ConfigChangeChangeTypeEnumChangeTypeUnspecified ConfigChangeChangeTypeEnum = "CHANGE_TYPE_UNSPECIFIED"
	ConfigChangeChangeTypeEnumAdded                 ConfigChangeChangeTypeEnum = "ADDED"
	ConfigChangeChangeTypeEnumRemoved               ConfigChangeChangeTypeEnum = "REMOVED"
	ConfigChangeChangeTypeEnumModified              ConfigChangeChangeTypeEnum = "MODIFIED"
)

type ConfigChange struct {
	Advices    []Advice                    `json:"advices,omitempty"`
	ChangeType *ConfigChangeChangeTypeEnum `json:"changeType,omitempty"`
	Element    *string                     `json:"element,omitempty"`
	NewValue   *string                     `json:"newValue,omitempty"`
	OldValue   *string                     `json:"oldValue,omitempty"`
}
