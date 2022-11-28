package shared

type GoogleCloudChannelV1ColumnDataTypeEnum string

const (
	GoogleCloudChannelV1ColumnDataTypeEnumDataTypeUnspecified GoogleCloudChannelV1ColumnDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1ColumnDataTypeEnumString              GoogleCloudChannelV1ColumnDataTypeEnum = "STRING"
	GoogleCloudChannelV1ColumnDataTypeEnumInt                 GoogleCloudChannelV1ColumnDataTypeEnum = "INT"
	GoogleCloudChannelV1ColumnDataTypeEnumDecimal             GoogleCloudChannelV1ColumnDataTypeEnum = "DECIMAL"
	GoogleCloudChannelV1ColumnDataTypeEnumMoney               GoogleCloudChannelV1ColumnDataTypeEnum = "MONEY"
	GoogleCloudChannelV1ColumnDataTypeEnumDate                GoogleCloudChannelV1ColumnDataTypeEnum = "DATE"
	GoogleCloudChannelV1ColumnDataTypeEnumDateTime            GoogleCloudChannelV1ColumnDataTypeEnum = "DATE_TIME"
)

// GoogleCloudChannelV1Column
// The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
type GoogleCloudChannelV1Column struct {
	ColumnID    *string                                 `json:"columnId,omitempty"`
	DataType    *GoogleCloudChannelV1ColumnDataTypeEnum `json:"dataType,omitempty"`
	DisplayName *string                                 `json:"displayName,omitempty"`
}
