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
	DisplayName             *string                `json:"displayName"`
	EnumValues              []string               `json:"enumValues"`
	GreaterThanOperatorName *string                `json:"greaterThanOperatorName"`
	IsFacetable             *bool                  `json:"isFacetable"`
	IsRepeatable            *bool                  `json:"isRepeatable"`
	IsReturnable            *bool                  `json:"isReturnable"`
	IsSortable              *bool                  `json:"isSortable"`
	IsSuggestable           *bool                  `json:"isSuggestable"`
	LessThanOperatorName    *string                `json:"lessThanOperatorName"`
	ObjectType              *string                `json:"objectType"`
	OperatorName            *string                `json:"operatorName"`
	Type                    *QueryOperatorTypeEnum `json:"type"`
}
