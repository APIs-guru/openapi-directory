package shared

type GooglePrivacyDlpV2ContentLocation struct {
	ContainerName      *string                             `json:"containerName"`
	ContainerTimestamp *string                             `json:"containerTimestamp"`
	ContainerVersion   *string                             `json:"containerVersion"`
	DocumentLocation   *GooglePrivacyDlpV2DocumentLocation `json:"documentLocation"`
	ImageLocation      *GooglePrivacyDlpV2ImageLocation    `json:"imageLocation"`
	MetadataLocation   *GooglePrivacyDlpV2MetadataLocation `json:"metadataLocation"`
	RecordLocation     *GooglePrivacyDlpV2RecordLocation   `json:"recordLocation"`
}
