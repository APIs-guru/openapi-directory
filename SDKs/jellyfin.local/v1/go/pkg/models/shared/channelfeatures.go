package shared

type ChannelFeatures struct {
	AutoRefreshLevels          *int32                        `json:"AutoRefreshLevels"`
	CanFilter                  *bool                         `json:"CanFilter"`
	CanSearch                  *bool                         `json:"CanSearch"`
	ContentTypes               []ChannelMediaContentTypeEnum `json:"ContentTypes"`
	DefaultSortFields          []ChannelItemSortFieldEnum    `json:"DefaultSortFields"`
	ID                         *string                       `json:"Id"`
	MaxPageSize                *int32                        `json:"MaxPageSize"`
	MediaTypes                 []ChannelMediaTypeEnum        `json:"MediaTypes"`
	Name                       *string                       `json:"Name"`
	SupportsContentDownloading *bool                         `json:"SupportsContentDownloading"`
	SupportsLatestMedia        *bool                         `json:"SupportsLatestMedia"`
	SupportsSortOrderToggle    *bool                         `json:"SupportsSortOrderToggle"`
}
