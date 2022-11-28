package shared

// ChainName
// Name to be used when displaying the chain.
type ChainName struct {
	DisplayName  *string `json:"displayName,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}
