package shared

// GooglePrivacyDlpV2Location
// Specifies the location of the finding.
type GooglePrivacyDlpV2Location struct {
	ByteRange        *GooglePrivacyDlpV2Range            `json:"byteRange,omitempty"`
	CodepointRange   *GooglePrivacyDlpV2Range            `json:"codepointRange,omitempty"`
	Container        *GooglePrivacyDlpV2Container        `json:"container,omitempty"`
	ContentLocations []GooglePrivacyDlpV2ContentLocation `json:"contentLocations,omitempty"`
}
