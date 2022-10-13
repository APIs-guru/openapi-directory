package shared

type EnterpriseCrmEventbusProtoAttributesDataTypeEnum string

const (
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumDataTypeUnspecified EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumEmail               EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "EMAIL"
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumURL                 EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "URL"
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumCurrency            EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "CURRENCY"
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumTimestamp           EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "TIMESTAMP"
	EnterpriseCrmEventbusProtoAttributesDataTypeEnumDomainName          EnterpriseCrmEventbusProtoAttributesDataTypeEnum = "DOMAIN_NAME"
)

type EnterpriseCrmEventbusProtoAttributesSearchableEnum string

const (
	EnterpriseCrmEventbusProtoAttributesSearchableEnumUnspecified EnterpriseCrmEventbusProtoAttributesSearchableEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusProtoAttributesSearchableEnumYes         EnterpriseCrmEventbusProtoAttributesSearchableEnum = "YES"
	EnterpriseCrmEventbusProtoAttributesSearchableEnumNo          EnterpriseCrmEventbusProtoAttributesSearchableEnum = "NO"
)

type EnterpriseCrmEventbusProtoAttributes struct {
	DataType       *EnterpriseCrmEventbusProtoAttributesDataTypeEnum   `json:"dataType"`
	DefaultValue   *EnterpriseCrmEventbusProtoValueType                `json:"defaultValue"`
	IsRequired     *bool                                               `json:"isRequired"`
	IsSearchable   *bool                                               `json:"isSearchable"`
	LogSettings    *EnterpriseCrmEventbusProtoLogSettings              `json:"logSettings"`
	Searchable     *EnterpriseCrmEventbusProtoAttributesSearchableEnum `json:"searchable"`
	TaskVisibility []string                                            `json:"taskVisibility"`
}
