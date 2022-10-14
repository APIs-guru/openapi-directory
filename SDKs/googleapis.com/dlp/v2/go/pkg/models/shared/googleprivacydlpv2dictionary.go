package shared

type GooglePrivacyDlpV2Dictionary struct {
	CloudStoragePath *GooglePrivacyDlpV2CloudStoragePath `json:"cloudStoragePath,omitempty"`
	WordList         *GooglePrivacyDlpV2WordList         `json:"wordList,omitempty"`
}
