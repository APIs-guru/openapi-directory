package shared

type IndexConfigTypeEnum string

const (
	IndexConfigTypeEnumIndexTypeUnspecified IndexConfigTypeEnum = "INDEX_TYPE_UNSPECIFIED"
	IndexConfigTypeEnumIndexTypeString      IndexConfigTypeEnum = "INDEX_TYPE_STRING"
	IndexConfigTypeEnumIndexTypeInteger     IndexConfigTypeEnum = "INDEX_TYPE_INTEGER"
)

type IndexConfig struct {
	CreateTime *string              `json:"createTime"`
	FieldPath  *string              `json:"fieldPath"`
	Type       *IndexConfigTypeEnum `json:"type"`
}
