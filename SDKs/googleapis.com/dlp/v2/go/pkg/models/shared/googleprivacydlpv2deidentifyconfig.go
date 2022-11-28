package shared

// GooglePrivacyDlpV2DeidentifyConfig
// The configuration that controls how the data will change.
type GooglePrivacyDlpV2DeidentifyConfig struct {
	ImageTransformations        *GooglePrivacyDlpV2ImageTransformations        `json:"imageTransformations,omitempty"`
	InfoTypeTransformations     *GooglePrivacyDlpV2InfoTypeTransformations     `json:"infoTypeTransformations,omitempty"`
	RecordTransformations       *GooglePrivacyDlpV2RecordTransformations       `json:"recordTransformations,omitempty"`
	TransformationErrorHandling *GooglePrivacyDlpV2TransformationErrorHandling `json:"transformationErrorHandling,omitempty"`
}
