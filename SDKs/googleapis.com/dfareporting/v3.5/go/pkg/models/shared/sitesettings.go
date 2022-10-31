package shared




type SiteSettingsVpaidAdapterChoiceTemplateEnum string

const (
    SiteSettingsVpaidAdapterChoiceTemplateEnumDefault SiteSettingsVpaidAdapterChoiceTemplateEnum = "DEFAULT"
SiteSettingsVpaidAdapterChoiceTemplateEnumFlash SiteSettingsVpaidAdapterChoiceTemplateEnum = "FLASH"
SiteSettingsVpaidAdapterChoiceTemplateEnumHtml5 SiteSettingsVpaidAdapterChoiceTemplateEnum = "HTML5"
SiteSettingsVpaidAdapterChoiceTemplateEnumBoth SiteSettingsVpaidAdapterChoiceTemplateEnum = "BOTH"
)


type SiteSettings struct {
    ActiveViewOptOut *bool `json:"activeViewOptOut,omitempty"`
    AdBlockingOptOut *bool `json:"adBlockingOptOut,omitempty"`
    DisableNewCookie *bool `json:"disableNewCookie,omitempty"`
    TagSetting *TagSetting `json:"tagSetting,omitempty"`
    VideoActiveViewOptOutTemplate *bool `json:"videoActiveViewOptOutTemplate,omitempty"`
    VpaidAdapterChoiceTemplate *SiteSettingsVpaidAdapterChoiceTemplateEnum `json:"vpaidAdapterChoiceTemplate,omitempty"`
    
}

