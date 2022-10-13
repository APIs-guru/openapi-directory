package shared

type GooglePrivacyDlpV2DeidentifyConfig struct {
	ImageTransformations        *GooglePrivacyDlpV2ImageTransformations        `json:"imageTransformations"`
	InfoTypeTransformations     *GooglePrivacyDlpV2InfoTypeTransformations     `json:"infoTypeTransformations"`
	RecordTransformations       *GooglePrivacyDlpV2RecordTransformations       `json:"recordTransformations"`
	TransformationErrorHandling *GooglePrivacyDlpV2TransformationErrorHandling `json:"transformationErrorHandling"`
}
