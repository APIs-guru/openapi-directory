package shared

type GooglePrivacyDlpV2StoredInfoTypeConfig struct {
	Description           *string                                        `json:"description"`
	Dictionary            *GooglePrivacyDlpV2Dictionary                  `json:"dictionary"`
	DisplayName           *string                                        `json:"displayName"`
	LargeCustomDictionary *GooglePrivacyDlpV2LargeCustomDictionaryConfig `json:"largeCustomDictionary"`
	Regex                 *GooglePrivacyDlpV2Regex                       `json:"regex"`
}
