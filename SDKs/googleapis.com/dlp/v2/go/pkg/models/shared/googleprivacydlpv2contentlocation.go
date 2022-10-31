package shared

type GooglePrivacyDlpV2ContentLocation struct {
	ContainerName      *string                             `json:"containerName,omitempty"`
	ContainerTimestamp *string                             `json:"containerTimestamp,omitempty"`
	ContainerVersion   *string                             `json:"containerVersion,omitempty"`
	DocumentLocation   *GooglePrivacyDlpV2DocumentLocation `json:"documentLocation,omitempty"`
	ImageLocation      *GooglePrivacyDlpV2ImageLocation    `json:"imageLocation,omitempty"`
	MetadataLocation   *GooglePrivacyDlpV2MetadataLocation `json:"metadataLocation,omitempty"`
	RecordLocation     *GooglePrivacyDlpV2RecordLocation   `json:"recordLocation,omitempty"`
}
