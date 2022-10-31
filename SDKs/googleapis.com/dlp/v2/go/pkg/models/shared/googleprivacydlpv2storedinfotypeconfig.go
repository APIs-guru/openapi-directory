package shared



type GooglePrivacyDlpV2StoredInfoTypeConfig struct {
    Description *string `json:"description,omitempty"`
    Dictionary *GooglePrivacyDlpV2Dictionary `json:"dictionary,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    LargeCustomDictionary *GooglePrivacyDlpV2LargeCustomDictionaryConfig `json:"largeCustomDictionary,omitempty"`
    Regex *GooglePrivacyDlpV2Regex `json:"regex,omitempty"`
    
}

