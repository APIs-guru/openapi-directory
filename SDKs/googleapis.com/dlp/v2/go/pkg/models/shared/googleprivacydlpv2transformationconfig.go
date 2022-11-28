package shared

// GooglePrivacyDlpV2TransformationConfig
// User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
type GooglePrivacyDlpV2TransformationConfig struct {
	DeidentifyTemplate           *string `json:"deidentifyTemplate,omitempty"`
	ImageRedactTemplate          *string `json:"imageRedactTemplate,omitempty"`
	StructuredDeidentifyTemplate *string `json:"structuredDeidentifyTemplate,omitempty"`
}
