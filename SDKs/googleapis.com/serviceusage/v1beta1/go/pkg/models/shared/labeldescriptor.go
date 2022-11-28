package shared

type LabelDescriptorValueTypeEnum string

const (
	LabelDescriptorValueTypeEnumString LabelDescriptorValueTypeEnum = "STRING"
	LabelDescriptorValueTypeEnumBool   LabelDescriptorValueTypeEnum = "BOOL"
	LabelDescriptorValueTypeEnumInt64  LabelDescriptorValueTypeEnum = "INT64"
)

// LabelDescriptor
// A description of a label.
type LabelDescriptor struct {
	Description *string                       `json:"description,omitempty"`
	Key         *string                       `json:"key,omitempty"`
	ValueType   *LabelDescriptorValueTypeEnum `json:"valueType,omitempty"`
}
