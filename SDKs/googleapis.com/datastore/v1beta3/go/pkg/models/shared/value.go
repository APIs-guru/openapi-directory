package shared

type ValueNullValueEnum string

const (
	ValueNullValueEnumNullValue ValueNullValueEnum = "NULL_VALUE"
)

// Value
// A message that can hold any of the supported value types and associated metadata.
type Value struct {
	ArrayValue         *ArrayValue         `json:"arrayValue,omitempty"`
	BlobValue          *string             `json:"blobValue,omitempty"`
	BooleanValue       *bool               `json:"booleanValue,omitempty"`
	DoubleValue        *float64            `json:"doubleValue,omitempty"`
	EntityValue        *Entity             `json:"entityValue,omitempty"`
	ExcludeFromIndexes *bool               `json:"excludeFromIndexes,omitempty"`
	GeoPointValue      *LatLng             `json:"geoPointValue,omitempty"`
	IntegerValue       *string             `json:"integerValue,omitempty"`
	KeyValue           *Key                `json:"keyValue,omitempty"`
	Meaning            *int32              `json:"meaning,omitempty"`
	NullValue          *ValueNullValueEnum `json:"nullValue,omitempty"`
	StringValue        *string             `json:"stringValue,omitempty"`
	TimestampValue     *string             `json:"timestampValue,omitempty"`
}
