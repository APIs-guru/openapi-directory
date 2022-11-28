package shared

type ConfigChangeChangeTypeEnum string

const (
	ConfigChangeChangeTypeEnumChangeTypeUnspecified ConfigChangeChangeTypeEnum = "CHANGE_TYPE_UNSPECIFIED"
	ConfigChangeChangeTypeEnumAdded                 ConfigChangeChangeTypeEnum = "ADDED"
	ConfigChangeChangeTypeEnumRemoved               ConfigChangeChangeTypeEnum = "REMOVED"
	ConfigChangeChangeTypeEnumModified              ConfigChangeChangeTypeEnum = "MODIFIED"
)

// ConfigChange
// Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
type ConfigChange struct {
	Advices    []Advice                    `json:"advices,omitempty"`
	ChangeType *ConfigChangeChangeTypeEnum `json:"changeType,omitempty"`
	Element    *string                     `json:"element,omitempty"`
	NewValue   *string                     `json:"newValue,omitempty"`
	OldValue   *string                     `json:"oldValue,omitempty"`
}
