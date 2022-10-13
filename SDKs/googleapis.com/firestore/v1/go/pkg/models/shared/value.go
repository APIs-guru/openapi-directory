package shared

type ValueNullValueEnum string

const (
	ValueNullValueEnumNullValue ValueNullValueEnum = "NULL_VALUE"
)

type Value struct {
	ArrayValue     *ArrayValue         `json:"arrayValue"`
	BooleanValue   *bool               `json:"booleanValue"`
	BytesValue     *string             `json:"bytesValue"`
	DoubleValue    *float64            `json:"doubleValue"`
	GeoPointValue  *LatLng             `json:"geoPointValue"`
	IntegerValue   *string             `json:"integerValue"`
	MapValue       *MapValue           `json:"mapValue"`
	NullValue      *ValueNullValueEnum `json:"nullValue"`
	ReferenceValue *string             `json:"referenceValue"`
	StringValue    *string             `json:"stringValue"`
	TimestampValue *string             `json:"timestampValue"`
}
