package shared

// Label
// Label to be used when displaying the price list, section, or item.
type Label struct {
	Description  *string `json:"description,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}
