package shared

// YoutubeAndPartnersInventorySourceConfig
// Settings that control what YouTube related inventories the YouTube and Partners line item will target.
type YoutubeAndPartnersInventorySourceConfig struct {
	IncludeYoutubeSearch        *bool `json:"includeYoutubeSearch,omitempty"`
	IncludeYoutubeVideoPartners *bool `json:"includeYoutubeVideoPartners,omitempty"`
	IncludeYoutubeVideos        *bool `json:"includeYoutubeVideos,omitempty"`
}
