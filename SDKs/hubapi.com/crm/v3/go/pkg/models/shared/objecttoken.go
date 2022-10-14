package shared

type ObjectTokenDataTypeEnum string

const (
	ObjectTokenDataTypeEnumBoolean  ObjectTokenDataTypeEnum = "BOOLEAN"
	ObjectTokenDataTypeEnumCurrency ObjectTokenDataTypeEnum = "CURRENCY"
	ObjectTokenDataTypeEnumDate     ObjectTokenDataTypeEnum = "DATE"
	ObjectTokenDataTypeEnumDatetime ObjectTokenDataTypeEnum = "DATETIME"
	ObjectTokenDataTypeEnumEmail    ObjectTokenDataTypeEnum = "EMAIL"
	ObjectTokenDataTypeEnumLink     ObjectTokenDataTypeEnum = "LINK"
	ObjectTokenDataTypeEnumNumeric  ObjectTokenDataTypeEnum = "NUMERIC"
	ObjectTokenDataTypeEnumString   ObjectTokenDataTypeEnum = "STRING"
	ObjectTokenDataTypeEnumStatus   ObjectTokenDataTypeEnum = "STATUS"
)

type ObjectToken struct {
	DataType *ObjectTokenDataTypeEnum `json:"dataType,omitempty"`
	Label    *string                  `json:"label,omitempty"`
	Name     *string                  `json:"name,omitempty"`
	Value    string                   `json:"value"`
}
