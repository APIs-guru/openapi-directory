package shared

type MasterTemplateSettingsInputModel struct {
	CenterEmailContent        *bool   `json:"centerEmailContent,omitempty"`
	CenterEmailContentPanel   *bool   `json:"centerEmailContentPanel,omitempty"`
	CenterEmailFooter         *bool   `json:"centerEmailFooter,omitempty"`
	ContentBackgroundColor    *string `json:"contentBackgroundColor,omitempty"`
	ContentColor              *string `json:"contentColor,omitempty"`
	ContentLinkColor          *string `json:"contentLinkColor,omitempty"`
	EmailBackgroundColor      *string `json:"emailBackgroundColor,omitempty"`
	EmailColor                *string `json:"emailColor,omitempty"`
	EmailLinkColor            *string `json:"emailLinkColor,omitempty"`
	FooterFontSize            *string `json:"footerFontSize,omitempty"`
	FooterLogoHeight          *string `json:"footerLogoHeight,omitempty"`
	FooterLogoPadding         *string `json:"footerLogoPadding,omitempty"`
	FooterPanelEmailContact   *bool   `json:"footerPanelEmailContact,omitempty"`
	FooterPanelPhoneContact   *bool   `json:"footerPanelPhoneContact,omitempty"`
	FooterPanelWebsiteContact *bool   `json:"footerPanelWebsiteContact,omitempty"`
	HeaderLogoHeight          *string `json:"headerLogoHeight,omitempty"`
	HeaderLogoPadding         *string `json:"headerLogoPadding,omitempty"`
	PanelBackgroundColor      *string `json:"panelBackgroundColor,omitempty"`
	PanelColor                *string `json:"panelColor,omitempty"`
	PanelLinkColor            *string `json:"panelLinkColor,omitempty"`
	PrivacyPolicyLink         *string `json:"privacyPolicyLink,omitempty"`
	ShowContentPanel          *bool   `json:"showContentPanel,omitempty"`
	ShowFooterLogo            *bool   `json:"showFooterLogo,omitempty"`
	ShowFooterPanel           *bool   `json:"showFooterPanel,omitempty"`
	ShowHeaderLogo            *bool   `json:"showHeaderLogo,omitempty"`
	ShowHeaderPanel           *bool   `json:"showHeaderPanel,omitempty"`
}
