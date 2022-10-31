package shared




type OpaqueColorThemeColorEnum string

const (
    OpaqueColorThemeColorEnumThemeColorTypeUnspecified OpaqueColorThemeColorEnum = "THEME_COLOR_TYPE_UNSPECIFIED"
OpaqueColorThemeColorEnumDark1 OpaqueColorThemeColorEnum = "DARK1"
OpaqueColorThemeColorEnumLight1 OpaqueColorThemeColorEnum = "LIGHT1"
OpaqueColorThemeColorEnumDark2 OpaqueColorThemeColorEnum = "DARK2"
OpaqueColorThemeColorEnumLight2 OpaqueColorThemeColorEnum = "LIGHT2"
OpaqueColorThemeColorEnumAccent1 OpaqueColorThemeColorEnum = "ACCENT1"
OpaqueColorThemeColorEnumAccent2 OpaqueColorThemeColorEnum = "ACCENT2"
OpaqueColorThemeColorEnumAccent3 OpaqueColorThemeColorEnum = "ACCENT3"
OpaqueColorThemeColorEnumAccent4 OpaqueColorThemeColorEnum = "ACCENT4"
OpaqueColorThemeColorEnumAccent5 OpaqueColorThemeColorEnum = "ACCENT5"
OpaqueColorThemeColorEnumAccent6 OpaqueColorThemeColorEnum = "ACCENT6"
OpaqueColorThemeColorEnumHyperlink OpaqueColorThemeColorEnum = "HYPERLINK"
OpaqueColorThemeColorEnumFollowedHyperlink OpaqueColorThemeColorEnum = "FOLLOWED_HYPERLINK"
OpaqueColorThemeColorEnumText1 OpaqueColorThemeColorEnum = "TEXT1"
OpaqueColorThemeColorEnumBackground1 OpaqueColorThemeColorEnum = "BACKGROUND1"
OpaqueColorThemeColorEnumText2 OpaqueColorThemeColorEnum = "TEXT2"
OpaqueColorThemeColorEnumBackground2 OpaqueColorThemeColorEnum = "BACKGROUND2"
)


type OpaqueColor struct {
    RgbColor *RgbColor `json:"rgbColor,omitempty"`
    ThemeColor *OpaqueColorThemeColorEnum `json:"themeColor,omitempty"`
    
}

