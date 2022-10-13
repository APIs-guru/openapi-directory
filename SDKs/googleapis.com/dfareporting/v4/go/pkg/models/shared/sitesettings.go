package shared

type SiteSettingsVpaidAdapterChoiceTemplateEnum string

const (
	SiteSettingsVpaidAdapterChoiceTemplateEnumDefault SiteSettingsVpaidAdapterChoiceTemplateEnum = "DEFAULT"
	SiteSettingsVpaidAdapterChoiceTemplateEnumFlash   SiteSettingsVpaidAdapterChoiceTemplateEnum = "FLASH"
	SiteSettingsVpaidAdapterChoiceTemplateEnumHtml5   SiteSettingsVpaidAdapterChoiceTemplateEnum = "HTML5"
	SiteSettingsVpaidAdapterChoiceTemplateEnumBoth    SiteSettingsVpaidAdapterChoiceTemplateEnum = "BOTH"
)

type SiteSettings struct {
	ActiveViewOptOut              *bool                                       `json:"activeViewOptOut"`
	AdBlockingOptOut              *bool                                       `json:"adBlockingOptOut"`
	DisableNewCookie              *bool                                       `json:"disableNewCookie"`
	TagSetting                    *TagSetting                                 `json:"tagSetting"`
	VideoActiveViewOptOutTemplate *bool                                       `json:"videoActiveViewOptOutTemplate"`
	VpaidAdapterChoiceTemplate    *SiteSettingsVpaidAdapterChoiceTemplateEnum `json:"vpaidAdapterChoiceTemplate"`
}
