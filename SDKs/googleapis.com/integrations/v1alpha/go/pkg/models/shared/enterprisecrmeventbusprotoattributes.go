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
	DataType       *EnterpriseCrmEventbusProtoAttributesDataTypeEnum   `json:"dataType,omitempty"`
	DefaultValue   *EnterpriseCrmEventbusProtoValueType                `json:"defaultValue,omitempty"`
	IsRequired     *bool                                               `json:"isRequired,omitempty"`
	IsSearchable   *bool                                               `json:"isSearchable,omitempty"`
	LogSettings    *EnterpriseCrmEventbusProtoLogSettings              `json:"logSettings,omitempty"`
	Searchable     *EnterpriseCrmEventbusProtoAttributesSearchableEnum `json:"searchable,omitempty"`
	TaskVisibility []string                                            `json:"taskVisibility,omitempty"`
}
