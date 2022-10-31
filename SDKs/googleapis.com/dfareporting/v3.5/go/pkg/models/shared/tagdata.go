package shared

type TagDataFormatEnum string

const (
	TagDataFormatEnumPlacementTagStandard                           TagDataFormatEnum = "PLACEMENT_TAG_STANDARD"
	TagDataFormatEnumPlacementTagIframeJavascript                   TagDataFormatEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
	TagDataFormatEnumPlacementTagIframeIlayer                       TagDataFormatEnum = "PLACEMENT_TAG_IFRAME_ILAYER"
	TagDataFormatEnumPlacementTagInternalRedirect                   TagDataFormatEnum = "PLACEMENT_TAG_INTERNAL_REDIRECT"
	TagDataFormatEnumPlacementTagJavascript                         TagDataFormatEnum = "PLACEMENT_TAG_JAVASCRIPT"
	TagDataFormatEnumPlacementTagInterstitialIframeJavascript       TagDataFormatEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
	TagDataFormatEnumPlacementTagInterstitialInternalRedirect       TagDataFormatEnum = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
	TagDataFormatEnumPlacementTagInterstitialJavascript             TagDataFormatEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
	TagDataFormatEnumPlacementTagClickCommands                      TagDataFormatEnum = "PLACEMENT_TAG_CLICK_COMMANDS"
	TagDataFormatEnumPlacementTagInstreamVideoPrefetch              TagDataFormatEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
	TagDataFormatEnumPlacementTagTracking                           TagDataFormatEnum = "PLACEMENT_TAG_TRACKING"
	TagDataFormatEnumPlacementTagTrackingIframe                     TagDataFormatEnum = "PLACEMENT_TAG_TRACKING_IFRAME"
	TagDataFormatEnumPlacementTagTrackingJavascript                 TagDataFormatEnum = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
	TagDataFormatEnumPlacementTagInstreamVideoPrefetchVast3         TagDataFormatEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
	TagDataFormatEnumPlacementTagIframeJavascriptLegacy             TagDataFormatEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
	TagDataFormatEnumPlacementTagJavascriptLegacy                   TagDataFormatEnum = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
	TagDataFormatEnumPlacementTagInterstitialIframeJavascriptLegacy TagDataFormatEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
	TagDataFormatEnumPlacementTagInterstitialJavascriptLegacy       TagDataFormatEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
	TagDataFormatEnumPlacementTagInstreamVideoPrefetchVast4         TagDataFormatEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
	TagDataFormatEnumPlacementTagTrackingThirdPartyMeasurement      TagDataFormatEnum = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
)

type TagData struct {
	AdID          *string            `json:"adId,omitempty"`
	ClickTag      *string            `json:"clickTag,omitempty"`
	CreativeID    *string            `json:"creativeId,omitempty"`
	Format        *TagDataFormatEnum `json:"format,omitempty"`
	ImpressionTag *string            `json:"impressionTag,omitempty"`
}
