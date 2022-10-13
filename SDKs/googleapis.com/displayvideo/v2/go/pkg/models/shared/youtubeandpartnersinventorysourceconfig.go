package shared

type YoutubeAndPartnersInventorySourceConfig struct {
	IncludeYoutubeSearch        *bool `json:"includeYoutubeSearch"`
	IncludeYoutubeVideoPartners *bool `json:"includeYoutubeVideoPartners"`
	IncludeYoutubeVideos        *bool `json:"includeYoutubeVideos"`
}
