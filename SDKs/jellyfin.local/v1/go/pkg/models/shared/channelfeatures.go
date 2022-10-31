package shared



type ChannelFeatures struct {
    AutoRefreshLevels *int32 `json:"AutoRefreshLevels,omitempty"`
    CanFilter *bool `json:"CanFilter,omitempty"`
    CanSearch *bool `json:"CanSearch,omitempty"`
    ContentTypes []ChannelMediaContentTypeEnum `json:"ContentTypes,omitempty"`
    DefaultSortFields []ChannelItemSortFieldEnum `json:"DefaultSortFields,omitempty"`
    ID *string `json:"Id,omitempty"`
    MaxPageSize *int32 `json:"MaxPageSize,omitempty"`
    MediaTypes []ChannelMediaTypeEnum `json:"MediaTypes,omitempty"`
    Name *string `json:"Name,omitempty"`
    SupportsContentDownloading *bool `json:"SupportsContentDownloading,omitempty"`
    SupportsLatestMedia *bool `json:"SupportsLatestMedia,omitempty"`
    SupportsSortOrderToggle *bool `json:"SupportsSortOrderToggle,omitempty"`
    
}

