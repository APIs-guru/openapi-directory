package shared

// SpreadsheetTheme
// Represents spreadsheet theme
type SpreadsheetTheme struct {
	PrimaryFontFamily *string          `json:"primaryFontFamily,omitempty"`
	ThemeColors       []ThemeColorPair `json:"themeColors,omitempty"`
}
