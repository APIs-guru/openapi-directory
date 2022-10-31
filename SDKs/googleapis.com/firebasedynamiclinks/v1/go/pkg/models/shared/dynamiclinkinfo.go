package shared



type DynamicLinkInfo struct {
    AnalyticsInfo *AnalyticsInfo `json:"analyticsInfo,omitempty"`
    AndroidInfo *AndroidInfo `json:"androidInfo,omitempty"`
    DesktopInfo *DesktopInfo `json:"desktopInfo,omitempty"`
    DomainURIPrefix *string `json:"domainUriPrefix,omitempty"`
    DynamicLinkDomain *string `json:"dynamicLinkDomain,omitempty"`
    IosInfo *IosInfo `json:"iosInfo,omitempty"`
    Link *string `json:"link,omitempty"`
    NavigationInfo *NavigationInfo `json:"navigationInfo,omitempty"`
    SocialMetaTagInfo *SocialMetaTagInfo `json:"socialMetaTagInfo,omitempty"`
    
}

