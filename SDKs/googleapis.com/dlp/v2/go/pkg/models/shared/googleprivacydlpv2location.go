package shared

type GooglePrivacyDlpV2Location struct {
	ByteRange        *GooglePrivacyDlpV2Range            `json:"byteRange"`
	CodepointRange   *GooglePrivacyDlpV2Range            `json:"codepointRange"`
	Container        *GooglePrivacyDlpV2Container        `json:"container"`
	ContentLocations []GooglePrivacyDlpV2ContentLocation `json:"contentLocations"`
}
