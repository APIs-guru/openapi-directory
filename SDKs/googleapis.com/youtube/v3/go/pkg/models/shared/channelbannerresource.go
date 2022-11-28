package shared

// ChannelBannerResource
// A channel banner returned as the response to a channel_banner.insert call.
type ChannelBannerResource struct {
	Etag *string `json:"etag,omitempty"`
	Kind *string `json:"kind,omitempty"`
	URL  *string `json:"url,omitempty"`
}
