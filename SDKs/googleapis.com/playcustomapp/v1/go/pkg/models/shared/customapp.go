package shared

// CustomApp
// This resource represents a custom app.
type CustomApp struct {
	LanguageCode  *string        `json:"languageCode,omitempty"`
	Organizations []Organization `json:"organizations,omitempty"`
	PackageName   *string        `json:"packageName,omitempty"`
	Title         *string        `json:"title,omitempty"`
}
