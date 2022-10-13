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

type Field struct {
	Cardinality  *FieldCardinalityEnum `json:"cardinality"`
	DefaultValue *string               `json:"defaultValue"`
	JSONName     *string               `json:"jsonName"`
	Kind         *FieldKindEnum        `json:"kind"`
	Name         *string               `json:"name"`
	Number       *int32                `json:"number"`
	OneofIndex   *int32                `json:"oneofIndex"`
	Options      []Option              `json:"options"`
	Packed       *bool                 `json:"packed"`
	TypeURL      *string               `json:"typeUrl"`
}
