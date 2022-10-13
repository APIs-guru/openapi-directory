package shared

type WmxSitemapTypeEnum string

const (
	WmxSitemapTypeEnumNotSitemap     WmxSitemapTypeEnum = "NOT_SITEMAP"
	WmxSitemapTypeEnumURLList        WmxSitemapTypeEnum = "URL_LIST"
	WmxSitemapTypeEnumSitemap        WmxSitemapTypeEnum = "SITEMAP"
	WmxSitemapTypeEnumRssFeed        WmxSitemapTypeEnum = "RSS_FEED"
	WmxSitemapTypeEnumAtomFeed       WmxSitemapTypeEnum = "ATOM_FEED"
	WmxSitemapTypeEnumPatternSitemap WmxSitemapTypeEnum = "PATTERN_SITEMAP"
	WmxSitemapTypeEnumOceanfront     WmxSitemapTypeEnum = "OCEANFRONT"
)

type WmxSitemap struct {
	Contents        []WmxSitemapContent `json:"contents"`
	Errors          *string             `json:"errors"`
	IsPending       *bool               `json:"isPending"`
	IsSitemapsIndex *bool               `json:"isSitemapsIndex"`
	LastDownloaded  *string             `json:"lastDownloaded"`
	LastSubmitted   *string             `json:"lastSubmitted"`
	Path            *string             `json:"path"`
	Type            *WmxSitemapTypeEnum `json:"type"`
	Warnings        *string             `json:"warnings"`
}
