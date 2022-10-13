package shared

type SpreadsheetTheme struct {
	PrimaryFontFamily *string          `json:"primaryFontFamily"`
	ThemeColors       []ThemeColorPair `json:"themeColors"`
}
