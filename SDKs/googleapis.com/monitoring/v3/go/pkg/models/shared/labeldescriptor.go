package shared

type LabelDescriptorValueTypeEnum string

const (
	LabelDescriptorValueTypeEnumString LabelDescriptorValueTypeEnum = "STRING"
	LabelDescriptorValueTypeEnumBool   LabelDescriptorValueTypeEnum = "BOOL"
	LabelDescriptorValueTypeEnumInt64  LabelDescriptorValueTypeEnum = "INT64"
)

type LabelDescriptor struct {
	Description *string                       `json:"description"`
	Key         *string                       `json:"key"`
	ValueType   *LabelDescriptorValueTypeEnum `json:"valueType"`
}
