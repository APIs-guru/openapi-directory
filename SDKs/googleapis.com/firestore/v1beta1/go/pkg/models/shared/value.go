package shared




type ValueNullValueEnum string

const (
    ValueNullValueEnumNullValue ValueNullValueEnum = "NULL_VALUE"
)


type Value struct {
    ArrayValue *ArrayValue `json:"arrayValue,omitempty"`
    BooleanValue *bool `json:"booleanValue,omitempty"`
    BytesValue *string `json:"bytesValue,omitempty"`
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    GeoPointValue *LatLng `json:"geoPointValue,omitempty"`
    IntegerValue *string `json:"integerValue,omitempty"`
    MapValue *MapValue `json:"mapValue,omitempty"`
    NullValue *ValueNullValueEnum `json:"nullValue,omitempty"`
    ReferenceValue *string `json:"referenceValue,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    TimestampValue *string `json:"timestampValue,omitempty"`
    
}

