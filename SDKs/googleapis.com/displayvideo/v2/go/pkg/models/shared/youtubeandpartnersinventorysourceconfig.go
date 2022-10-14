package shared

type YoutubeAndPartnersInventorySourceConfig struct {
	IncludeYoutubeSearch        *bool `json:"includeYoutubeSearch,omitempty"`
	IncludeYoutubeVideoPartners *bool `json:"includeYoutubeVideoPartners,omitempty"`
	IncludeYoutubeVideos        *bool `json:"includeYoutubeVideos,omitempty"`
}
