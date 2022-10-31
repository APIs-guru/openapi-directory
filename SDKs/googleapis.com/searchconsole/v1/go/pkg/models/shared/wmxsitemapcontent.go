package shared

type WmxSitemapContentTypeEnum string

const (
	WmxSitemapContentTypeEnumWeb             WmxSitemapContentTypeEnum = "WEB"
	WmxSitemapContentTypeEnumImage           WmxSitemapContentTypeEnum = "IMAGE"
	WmxSitemapContentTypeEnumVideo           WmxSitemapContentTypeEnum = "VIDEO"
	WmxSitemapContentTypeEnumNews            WmxSitemapContentTypeEnum = "NEWS"
	WmxSitemapContentTypeEnumMobile          WmxSitemapContentTypeEnum = "MOBILE"
	WmxSitemapContentTypeEnumAndroidApp      WmxSitemapContentTypeEnum = "ANDROID_APP"
	WmxSitemapContentTypeEnumPattern         WmxSitemapContentTypeEnum = "PATTERN"
	WmxSitemapContentTypeEnumIosApp          WmxSitemapContentTypeEnum = "IOS_APP"
	WmxSitemapContentTypeEnumDataFeedElement WmxSitemapContentTypeEnum = "DATA_FEED_ELEMENT"
)

type WmxSitemapContent struct {
	Indexed   *string                    `json:"indexed,omitempty"`
	Submitted *string                    `json:"submitted,omitempty"`
	Type      *WmxSitemapContentTypeEnum `json:"type,omitempty"`
}
