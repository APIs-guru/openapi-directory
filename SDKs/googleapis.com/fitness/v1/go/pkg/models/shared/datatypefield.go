package shared

type DataTypeFieldFormatEnum string

const (
	DataTypeFieldFormatEnumInteger     DataTypeFieldFormatEnum = "integer"
	DataTypeFieldFormatEnumFloatPoint  DataTypeFieldFormatEnum = "floatPoint"
	DataTypeFieldFormatEnumString      DataTypeFieldFormatEnum = "string"
	DataTypeFieldFormatEnumMap         DataTypeFieldFormatEnum = "map"
	DataTypeFieldFormatEnumIntegerList DataTypeFieldFormatEnum = "integerList"
	DataTypeFieldFormatEnumFloatList   DataTypeFieldFormatEnum = "floatList"
	DataTypeFieldFormatEnumBlob        DataTypeFieldFormatEnum = "blob"
)

type DataTypeField struct {
	Format   *DataTypeFieldFormatEnum `json:"format,omitempty"`
	Name     *string                  `json:"name,omitempty"`
	Optional *bool                    `json:"optional,omitempty"`
}
