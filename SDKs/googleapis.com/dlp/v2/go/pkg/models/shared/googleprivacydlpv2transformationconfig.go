package shared



type GooglePrivacyDlpV2TransformationConfig struct {
    DeidentifyTemplate *string `json:"deidentifyTemplate,omitempty"`
    ImageRedactTemplate *string `json:"imageRedactTemplate,omitempty"`
    StructuredDeidentifyTemplate *string `json:"structuredDeidentifyTemplate,omitempty"`
    
}

