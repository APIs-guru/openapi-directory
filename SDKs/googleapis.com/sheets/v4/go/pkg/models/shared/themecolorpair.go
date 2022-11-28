package shared

type ThemeColorPairColorTypeEnum string

const (
	ThemeColorPairColorTypeEnumThemeColorTypeUnspecified ThemeColorPairColorTypeEnum = "THEME_COLOR_TYPE_UNSPECIFIED"
	ThemeColorPairColorTypeEnumText                      ThemeColorPairColorTypeEnum = "TEXT"
	ThemeColorPairColorTypeEnumBackground                ThemeColorPairColorTypeEnum = "BACKGROUND"
	ThemeColorPairColorTypeEnumAccent1                   ThemeColorPairColorTypeEnum = "ACCENT1"
	ThemeColorPairColorTypeEnumAccent2                   ThemeColorPairColorTypeEnum = "ACCENT2"
	ThemeColorPairColorTypeEnumAccent3                   ThemeColorPairColorTypeEnum = "ACCENT3"
	ThemeColorPairColorTypeEnumAccent4                   ThemeColorPairColorTypeEnum = "ACCENT4"
	ThemeColorPairColorTypeEnumAccent5                   ThemeColorPairColorTypeEnum = "ACCENT5"
	ThemeColorPairColorTypeEnumAccent6                   ThemeColorPairColorTypeEnum = "ACCENT6"
	ThemeColorPairColorTypeEnumLink                      ThemeColorPairColorTypeEnum = "LINK"
)

// ThemeColorPair
// A pair mapping a spreadsheet theme color type to the concrete color it represents.
type ThemeColorPair struct {
	Color     *ColorStyle                  `json:"color,omitempty"`
	ColorType *ThemeColorPairColorTypeEnum `json:"colorType,omitempty"`
}
