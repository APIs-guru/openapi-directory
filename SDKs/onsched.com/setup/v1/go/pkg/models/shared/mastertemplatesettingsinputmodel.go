package shared

type MasterTemplateSettingsInputModel struct {
	CenterEmailContent        *bool   `json:"centerEmailContent"`
	CenterEmailContentPanel   *bool   `json:"centerEmailContentPanel"`
	CenterEmailFooter         *bool   `json:"centerEmailFooter"`
	ContentBackgroundColor    *string `json:"contentBackgroundColor"`
	ContentColor              *string `json:"contentColor"`
	ContentLinkColor          *string `json:"contentLinkColor"`
	EmailBackgroundColor      *string `json:"emailBackgroundColor"`
	EmailColor                *string `json:"emailColor"`
	EmailLinkColor            *string `json:"emailLinkColor"`
	FooterFontSize            *string `json:"footerFontSize"`
	FooterLogoHeight          *string `json:"footerLogoHeight"`
	FooterLogoPadding         *string `json:"footerLogoPadding"`
	FooterPanelEmailContact   *bool   `json:"footerPanelEmailContact"`
	FooterPanelPhoneContact   *bool   `json:"footerPanelPhoneContact"`
	FooterPanelWebsiteContact *bool   `json:"footerPanelWebsiteContact"`
	HeaderLogoHeight          *string `json:"headerLogoHeight"`
	HeaderLogoPadding         *string `json:"headerLogoPadding"`
	PanelBackgroundColor      *string `json:"panelBackgroundColor"`
	PanelColor                *string `json:"panelColor"`
	PanelLinkColor            *string `json:"panelLinkColor"`
	PrivacyPolicyLink         *string `json:"privacyPolicyLink"`
	ShowContentPanel          *bool   `json:"showContentPanel"`
	ShowFooterLogo            *bool   `json:"showFooterLogo"`
	ShowFooterPanel           *bool   `json:"showFooterPanel"`
	ShowHeaderLogo            *bool   `json:"showHeaderLogo"`
	ShowHeaderPanel           *bool   `json:"showHeaderPanel"`
}
