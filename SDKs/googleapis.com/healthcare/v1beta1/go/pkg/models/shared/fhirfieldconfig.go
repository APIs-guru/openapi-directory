package shared

type FhirFieldConfigProfileTypeEnum string

const (
	FhirFieldConfigProfileTypeEnumProfileTypeUnspecified FhirFieldConfigProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
	FhirFieldConfigProfileTypeEnumKeepAll                FhirFieldConfigProfileTypeEnum = "KEEP_ALL"
	FhirFieldConfigProfileTypeEnumBasic                  FhirFieldConfigProfileTypeEnum = "BASIC"
	FhirFieldConfigProfileTypeEnumCleanAll               FhirFieldConfigProfileTypeEnum = "CLEAN_ALL"
)

// FhirFieldConfig
// Specifies how to handle the de-identification of a FHIR store.
type FhirFieldConfig struct {
	FieldMetadataList []GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata `json:"fieldMetadataList,omitempty"`
	Options           *GoogleCloudHealthcareV1beta1DeidentifyOptions        `json:"options,omitempty"`
	ProfileType       *FhirFieldConfigProfileTypeEnum                       `json:"profileType,omitempty"`
}
