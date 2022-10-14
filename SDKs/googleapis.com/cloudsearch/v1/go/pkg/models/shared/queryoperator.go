package shared

type QueryOperatorTypeEnum string

const (
	QueryOperatorTypeEnumUnknown   QueryOperatorTypeEnum = "UNKNOWN"
	QueryOperatorTypeEnumInteger   QueryOperatorTypeEnum = "INTEGER"
	QueryOperatorTypeEnumDouble    QueryOperatorTypeEnum = "DOUBLE"
	QueryOperatorTypeEnumTimestamp QueryOperatorTypeEnum = "TIMESTAMP"
	QueryOperatorTypeEnumBoolean   QueryOperatorTypeEnum = "BOOLEAN"
	QueryOperatorTypeEnumEnum      QueryOperatorTypeEnum = "ENUM"
	QueryOperatorTypeEnumDate      QueryOperatorTypeEnum = "DATE"
	QueryOperatorTypeEnumText      QueryOperatorTypeEnum = "TEXT"
	QueryOperatorTypeEnumHTML      QueryOperatorTypeEnum = "HTML"
)

type QueryOperator struct {
	DisplayName             *string                `json:"displayName,omitempty"`
	EnumValues              []string               `json:"enumValues,omitempty"`
	GreaterThanOperatorName *string                `json:"greaterThanOperatorName,omitempty"`
	IsFacetable             *bool                  `json:"isFacetable,omitempty"`
	IsRepeatable            *bool                  `json:"isRepeatable,omitempty"`
	IsReturnable            *bool                  `json:"isReturnable,omitempty"`
	IsSortable              *bool                  `json:"isSortable,omitempty"`
	IsSuggestable           *bool                  `json:"isSuggestable,omitempty"`
	LessThanOperatorName    *string                `json:"lessThanOperatorName,omitempty"`
	ObjectType              *string                `json:"objectType,omitempty"`
	OperatorName            *string                `json:"operatorName,omitempty"`
	Type                    *QueryOperatorTypeEnum `json:"type,omitempty"`
}
