package shared

type GooglePrivacyDlpV2TransformationConfig struct {
	DeidentifyTemplate           *string `json:"deidentifyTemplate"`
	ImageRedactTemplate          *string `json:"imageRedactTemplate"`
	StructuredDeidentifyTemplate *string `json:"structuredDeidentifyTemplate"`
}
