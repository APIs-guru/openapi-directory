package shared

type FhirStoreComplexDataTypeReferenceParsingEnum string

const (
	FhirStoreComplexDataTypeReferenceParsingEnumComplexDataTypeReferenceParsingUnspecified FhirStoreComplexDataTypeReferenceParsingEnum = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED"
	FhirStoreComplexDataTypeReferenceParsingEnumDisabled                                   FhirStoreComplexDataTypeReferenceParsingEnum = "DISABLED"
	FhirStoreComplexDataTypeReferenceParsingEnumEnabled                                    FhirStoreComplexDataTypeReferenceParsingEnum = "ENABLED"
)

type FhirStoreVersionEnum string

const (
	FhirStoreVersionEnumVersionUnspecified FhirStoreVersionEnum = "VERSION_UNSPECIFIED"
	FhirStoreVersionEnumDstu2              FhirStoreVersionEnum = "DSTU2"
	FhirStoreVersionEnumStu3               FhirStoreVersionEnum = "STU3"
	FhirStoreVersionEnumR4                 FhirStoreVersionEnum = "R4"
)

type FhirStore struct {
	ComplexDataTypeReferenceParsing *FhirStoreComplexDataTypeReferenceParsingEnum `json:"complexDataTypeReferenceParsing"`
	DefaultSearchHandlingStrict     *bool                                         `json:"defaultSearchHandlingStrict"`
	DisableReferentialIntegrity     *bool                                         `json:"disableReferentialIntegrity"`
	DisableResourceVersioning       *bool                                         `json:"disableResourceVersioning"`
	EnableUpdateCreate              *bool                                         `json:"enableUpdateCreate"`
	Labels                          map[string]string                             `json:"labels"`
	Name                            *string                                       `json:"name"`
	NotificationConfig              *NotificationConfig                           `json:"notificationConfig"`
	StreamConfigs                   []StreamConfig                                `json:"streamConfigs"`
	ValidationConfig                *ValidationConfig                             `json:"validationConfig"`
	Version                         *FhirStoreVersionEnum                         `json:"version"`
}
