package shared

type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum string

const (
	GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnumOccurrenceTypeUnspecified GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum = "OCCURRENCE_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnumOptionalOnce              GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum = "OPTIONAL_ONCE"
	GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnumOptionalMultiple          GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum = "OPTIONAL_MULTIPLE"
	GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnumRequiredOnce              GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum = "REQUIRED_ONCE"
	GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnumRequiredMultiple          GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum = "REQUIRED_MULTIPLE"
)

// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty
// Defines properties that can be part of the entity type.
type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty struct {
	Name           *string                                                                         `json:"name,omitempty"`
	OccurrenceType *GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum `json:"occurrenceType,omitempty"`
	ValueType      *string                                                                         `json:"valueType,omitempty"`
}
