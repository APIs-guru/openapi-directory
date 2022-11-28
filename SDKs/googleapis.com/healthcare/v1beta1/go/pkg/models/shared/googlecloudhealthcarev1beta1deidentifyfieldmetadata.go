package shared

// GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata
// Specifies the FHIR paths to match and how to handle the de-identification of matching fields.
type GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata struct {
	CharacterMaskField map[string]interface{} `json:"characterMaskField,omitempty"`
	CleanTextField     map[string]interface{} `json:"cleanTextField,omitempty"`
	CryptoHashField    map[string]interface{} `json:"cryptoHashField,omitempty"`
	DateShiftField     map[string]interface{} `json:"dateShiftField,omitempty"`
	KeepField          map[string]interface{} `json:"keepField,omitempty"`
	Paths              []string               `json:"paths,omitempty"`
	RemoveField        map[string]interface{} `json:"removeField,omitempty"`
}
