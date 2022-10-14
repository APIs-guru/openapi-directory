package shared

type ValidationConfig struct {
	DisableFhirpathValidation      *bool    `json:"disableFhirpathValidation,omitempty"`
	DisableProfileValidation       *bool    `json:"disableProfileValidation,omitempty"`
	DisableReferenceTypeValidation *bool    `json:"disableReferenceTypeValidation,omitempty"`
	DisableRequiredFieldValidation *bool    `json:"disableRequiredFieldValidation,omitempty"`
	EnabledImplementationGuides    []string `json:"enabledImplementationGuides,omitempty"`
}
