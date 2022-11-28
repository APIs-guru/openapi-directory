package shared

// GooglePrivacyDlpV2StoredInfoTypeConfig
// Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
type GooglePrivacyDlpV2StoredInfoTypeConfig struct {
	Description           *string                                        `json:"description,omitempty"`
	Dictionary            *GooglePrivacyDlpV2Dictionary                  `json:"dictionary,omitempty"`
	DisplayName           *string                                        `json:"displayName,omitempty"`
	LargeCustomDictionary *GooglePrivacyDlpV2LargeCustomDictionaryConfig `json:"largeCustomDictionary,omitempty"`
	Regex                 *GooglePrivacyDlpV2Regex                       `json:"regex,omitempty"`
}
