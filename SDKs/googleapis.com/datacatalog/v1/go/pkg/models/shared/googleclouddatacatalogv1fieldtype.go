package shared

type GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum string

const (
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumPrimitiveTypeUnspecified GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "PRIMITIVE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumDouble                   GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "DOUBLE"
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumString                   GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "STRING"
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumBool                     GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "BOOL"
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumTimestamp                GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "TIMESTAMP"
	GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnumRichtext                 GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = "RICHTEXT"
)

type GoogleCloudDatacatalogV1FieldType struct {
	EnumType      *GoogleCloudDatacatalogV1FieldTypeEnumType          `json:"enumType"`
	PrimitiveType *GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum `json:"primitiveType"`
}
