package shared



type SpreadsheetTheme struct {
    PrimaryFontFamily *string `json:"primaryFontFamily,omitempty"`
    ThemeColors []ThemeColorPair `json:"themeColors,omitempty"`
    
}

