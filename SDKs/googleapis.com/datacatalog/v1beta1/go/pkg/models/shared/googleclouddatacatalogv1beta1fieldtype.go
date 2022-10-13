package shared

type GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum string

const (
	GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumPrimitiveTypeUnspecified GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum = "PRIMITIVE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumDouble                   GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum = "DOUBLE"
	GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumString                   GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum = "STRING"
	GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumBool                     GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum = "BOOL"
	GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnumTimestamp                GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum = "TIMESTAMP"
)

type GoogleCloudDatacatalogV1beta1FieldType struct {
	EnumType      *GoogleCloudDatacatalogV1beta1FieldTypeEnumType          `json:"enumType"`
	PrimitiveType *GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum `json:"primitiveType"`
}
