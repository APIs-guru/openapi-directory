package shared

type ValidationConfig struct {
	DisableFhirpathValidation      *bool    `json:"disableFhirpathValidation"`
	DisableProfileValidation       *bool    `json:"disableProfileValidation"`
	DisableReferenceTypeValidation *bool    `json:"disableReferenceTypeValidation"`
	DisableRequiredFieldValidation *bool    `json:"disableRequiredFieldValidation"`
	EnabledImplementationGuides    []string `json:"enabledImplementationGuides"`
}
