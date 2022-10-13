package shared

type ValueNullValueEnum string

const (
	ValueNullValueEnumNullValue ValueNullValueEnum = "NULL_VALUE"
)

type Value struct {
	ArrayValue         *ArrayValue         `json:"arrayValue"`
	BlobValue          *string             `json:"blobValue"`
	BooleanValue       *bool               `json:"booleanValue"`
	DoubleValue        *float64            `json:"doubleValue"`
	EntityValue        *Entity             `json:"entityValue"`
	ExcludeFromIndexes *bool               `json:"excludeFromIndexes"`
	GeoPointValue      *LatLng             `json:"geoPointValue"`
	IntegerValue       *string             `json:"integerValue"`
	KeyValue           *Key                `json:"keyValue"`
	Meaning            *int32              `json:"meaning"`
	NullValue          *ValueNullValueEnum `json:"nullValue"`
	StringValue        *string             `json:"stringValue"`
	TimestampValue     *string             `json:"timestampValue"`
}
