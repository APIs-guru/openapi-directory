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
	ComplexDataTypeReferenceParsing *FhirStoreComplexDataTypeReferenceParsingEnum `json:"complexDataTypeReferenceParsing,omitempty"`
	DefaultSearchHandlingStrict     *bool                                         `json:"defaultSearchHandlingStrict,omitempty"`
	DisableReferentialIntegrity     *bool                                         `json:"disableReferentialIntegrity,omitempty"`
	DisableResourceVersioning       *bool                                         `json:"disableResourceVersioning,omitempty"`
	EnableUpdateCreate              *bool                                         `json:"enableUpdateCreate,omitempty"`
	Labels                          map[string]string                             `json:"labels,omitempty"`
	Name                            *string                                       `json:"name,omitempty"`
	NotificationConfig              *NotificationConfig                           `json:"notificationConfig,omitempty"`
	StreamConfigs                   []StreamConfig                                `json:"streamConfigs,omitempty"`
	ValidationConfig                *ValidationConfig                             `json:"validationConfig,omitempty"`
	Version                         *FhirStoreVersionEnum                         `json:"version,omitempty"`
}
