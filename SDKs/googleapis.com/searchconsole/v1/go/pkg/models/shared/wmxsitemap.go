package shared




type WmxSitemapTypeEnum string

const (
    WmxSitemapTypeEnumNotSitemap WmxSitemapTypeEnum = "NOT_SITEMAP"
WmxSitemapTypeEnumURLList WmxSitemapTypeEnum = "URL_LIST"
WmxSitemapTypeEnumSitemap WmxSitemapTypeEnum = "SITEMAP"
WmxSitemapTypeEnumRssFeed WmxSitemapTypeEnum = "RSS_FEED"
WmxSitemapTypeEnumAtomFeed WmxSitemapTypeEnum = "ATOM_FEED"
WmxSitemapTypeEnumPatternSitemap WmxSitemapTypeEnum = "PATTERN_SITEMAP"
WmxSitemapTypeEnumOceanfront WmxSitemapTypeEnum = "OCEANFRONT"
)


type WmxSitemap struct {
    Contents []WmxSitemapContent `json:"contents,omitempty"`
    Errors *string `json:"errors,omitempty"`
    IsPending *bool `json:"isPending,omitempty"`
    IsSitemapsIndex *bool `json:"isSitemapsIndex,omitempty"`
    LastDownloaded *string `json:"lastDownloaded,omitempty"`
    LastSubmitted *string `json:"lastSubmitted,omitempty"`
    Path *string `json:"path,omitempty"`
    Type *WmxSitemapTypeEnum `json:"type,omitempty"`
    Warnings *string `json:"warnings,omitempty"`
    
}

