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

// DataTypeField
// In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.
type DataTypeField struct {
	Format   *DataTypeFieldFormatEnum `json:"format,omitempty"`
	Name     *string                  `json:"name,omitempty"`
	Optional *bool                    `json:"optional,omitempty"`
}
