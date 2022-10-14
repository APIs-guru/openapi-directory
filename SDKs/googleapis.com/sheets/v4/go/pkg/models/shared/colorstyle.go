package shared

type ColorStyleThemeColorEnum string

const (
	ColorStyleThemeColorEnumThemeColorTypeUnspecified ColorStyleThemeColorEnum = "THEME_COLOR_TYPE_UNSPECIFIED"
	ColorStyleThemeColorEnumText                      ColorStyleThemeColorEnum = "TEXT"
	ColorStyleThemeColorEnumBackground                ColorStyleThemeColorEnum = "BACKGROUND"
	ColorStyleThemeColorEnumAccent1                   ColorStyleThemeColorEnum = "ACCENT1"
	ColorStyleThemeColorEnumAccent2                   ColorStyleThemeColorEnum = "ACCENT2"
	ColorStyleThemeColorEnumAccent3                   ColorStyleThemeColorEnum = "ACCENT3"
	ColorStyleThemeColorEnumAccent4                   ColorStyleThemeColorEnum = "ACCENT4"
	ColorStyleThemeColorEnumAccent5                   ColorStyleThemeColorEnum = "ACCENT5"
	ColorStyleThemeColorEnumAccent6                   ColorStyleThemeColorEnum = "ACCENT6"
	ColorStyleThemeColorEnumLink                      ColorStyleThemeColorEnum = "LINK"
)

type ColorStyle struct {
	RgbColor   *Color                    `json:"rgbColor,omitempty"`
	ThemeColor *ColorStyleThemeColorEnum `json:"themeColor,omitempty"`
}
