package shared

type IndexConfigTypeEnum string

const (
	IndexConfigTypeEnumIndexTypeUnspecified IndexConfigTypeEnum = "INDEX_TYPE_UNSPECIFIED"
	IndexConfigTypeEnumIndexTypeString      IndexConfigTypeEnum = "INDEX_TYPE_STRING"
	IndexConfigTypeEnumIndexTypeInteger     IndexConfigTypeEnum = "INDEX_TYPE_INTEGER"
)

// IndexConfig
// Configuration for an indexed field.
type IndexConfig struct {
	CreateTime *string              `json:"createTime,omitempty"`
	FieldPath  *string              `json:"fieldPath,omitempty"`
	Type       *IndexConfigTypeEnum `json:"type,omitempty"`
}

// IndexConfigInput
// Configuration for an indexed field.
type IndexConfigInput struct {
	FieldPath *string              `json:"fieldPath,omitempty"`
	Type      *IndexConfigTypeEnum `json:"type,omitempty"`
}
