package shared

type DynamicLinkInfo struct {
	AnalyticsInfo     *AnalyticsInfo     `json:"analyticsInfo"`
	AndroidInfo       *AndroidInfo       `json:"androidInfo"`
	DesktopInfo       *DesktopInfo       `json:"desktopInfo"`
	DomainURIPrefix   *string            `json:"domainUriPrefix"`
	DynamicLinkDomain *string            `json:"dynamicLinkDomain"`
	IosInfo           *IosInfo           `json:"iosInfo"`
	Link              *string            `json:"link"`
	NavigationInfo    *NavigationInfo    `json:"navigationInfo"`
	SocialMetaTagInfo *SocialMetaTagInfo `json:"socialMetaTagInfo"`
}
