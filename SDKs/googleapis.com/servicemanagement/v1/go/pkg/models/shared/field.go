package shared

type FieldCardinalityEnum string

const (
	FieldCardinalityEnumCardinalityUnknown  FieldCardinalityEnum = "CARDINALITY_UNKNOWN"
	FieldCardinalityEnumCardinalityOptional FieldCardinalityEnum = "CARDINALITY_OPTIONAL"
	FieldCardinalityEnumCardinalityRequired FieldCardinalityEnum = "CARDINALITY_REQUIRED"
	FieldCardinalityEnumCardinalityRepeated FieldCardinalityEnum = "CARDINALITY_REPEATED"
)

type FieldKindEnum string

const (
	FieldKindEnumTypeUnknown  FieldKindEnum = "TYPE_UNKNOWN"
	FieldKindEnumTypeDouble   FieldKindEnum = "TYPE_DOUBLE"
	FieldKindEnumTypeFloat    FieldKindEnum = "TYPE_FLOAT"
	FieldKindEnumTypeInt64    FieldKindEnum = "TYPE_INT64"
	FieldKindEnumTypeUint64   FieldKindEnum = "TYPE_UINT64"
	FieldKindEnumTypeInt32    FieldKindEnum = "TYPE_INT32"
	FieldKindEnumTypeFixed64  FieldKindEnum = "TYPE_FIXED64"
	FieldKindEnumTypeFixed32  FieldKindEnum = "TYPE_FIXED32"
	FieldKindEnumTypeBool     FieldKindEnum = "TYPE_BOOL"
	FieldKindEnumTypeString   FieldKindEnum = "TYPE_STRING"
	FieldKindEnumTypeGroup    FieldKindEnum = "TYPE_GROUP"
	FieldKindEnumTypeMessage  FieldKindEnum = "TYPE_MESSAGE"
	FieldKindEnumTypeBytes    FieldKindEnum = "TYPE_BYTES"
	FieldKindEnumTypeUint32   FieldKindEnum = "TYPE_UINT32"
	FieldKindEnumTypeEnum     FieldKindEnum = "TYPE_ENUM"
	FieldKindEnumTypeSfixed32 FieldKindEnum = "TYPE_SFIXED32"
	FieldKindEnumTypeSfixed64 FieldKindEnum = "TYPE_SFIXED64"
	FieldKindEnumTypeSint32   FieldKindEnum = "TYPE_SINT32"
	FieldKindEnumTypeSint64   FieldKindEnum = "TYPE_SINT64"
)

// Field
// A single field of a message type.
type Field struct {
	Cardinality  *FieldCardinalityEnum `json:"cardinality,omitempty"`
	DefaultValue *string               `json:"defaultValue,omitempty"`
	JSONName     *string               `json:"jsonName,omitempty"`
	Kind         *FieldKindEnum        `json:"kind,omitempty"`
	Name         *string               `json:"name,omitempty"`
	Number       *int32                `json:"number,omitempty"`
	OneofIndex   *int32                `json:"oneofIndex,omitempty"`
	Options      []Option              `json:"options,omitempty"`
	Packed       *bool                 `json:"packed,omitempty"`
	TypeURL      *string               `json:"typeUrl,omitempty"`
}
