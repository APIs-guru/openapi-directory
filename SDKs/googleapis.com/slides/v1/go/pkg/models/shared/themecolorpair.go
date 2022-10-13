package shared

type ThemeColorPairTypeEnum string

const (
	ThemeColorPairTypeEnumThemeColorTypeUnspecified ThemeColorPairTypeEnum = "THEME_COLOR_TYPE_UNSPECIFIED"
	ThemeColorPairTypeEnumDark1                     ThemeColorPairTypeEnum = "DARK1"
	ThemeColorPairTypeEnumLight1                    ThemeColorPairTypeEnum = "LIGHT1"
	ThemeColorPairTypeEnumDark2                     ThemeColorPairTypeEnum = "DARK2"
	ThemeColorPairTypeEnumLight2                    ThemeColorPairTypeEnum = "LIGHT2"
	ThemeColorPairTypeEnumAccent1                   ThemeColorPairTypeEnum = "ACCENT1"
	ThemeColorPairTypeEnumAccent2                   ThemeColorPairTypeEnum = "ACCENT2"
	ThemeColorPairTypeEnumAccent3                   ThemeColorPairTypeEnum = "ACCENT3"
	ThemeColorPairTypeEnumAccent4                   ThemeColorPairTypeEnum = "ACCENT4"
	ThemeColorPairTypeEnumAccent5                   ThemeColorPairTypeEnum = "ACCENT5"
	ThemeColorPairTypeEnumAccent6                   ThemeColorPairTypeEnum = "ACCENT6"
	ThemeColorPairTypeEnumHyperlink                 ThemeColorPairTypeEnum = "HYPERLINK"
	ThemeColorPairTypeEnumFollowedHyperlink         ThemeColorPairTypeEnum = "FOLLOWED_HYPERLINK"
	ThemeColorPairTypeEnumText1                     ThemeColorPairTypeEnum = "TEXT1"
	ThemeColorPairTypeEnumBackground1               ThemeColorPairTypeEnum = "BACKGROUND1"
	ThemeColorPairTypeEnumText2                     ThemeColorPairTypeEnum = "TEXT2"
	ThemeColorPairTypeEnumBackground2               ThemeColorPairTypeEnum = "BACKGROUND2"
)

type ThemeColorPair struct {
	Color *RgbColor               `json:"color"`
	Type  *ThemeColorPairTypeEnum `json:"type"`
}
