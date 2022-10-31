package shared

type ChannelSettings struct {
	Country                    *string  `json:"country,omitempty"`
	DefaultLanguage            *string  `json:"defaultLanguage,omitempty"`
	DefaultTab                 *string  `json:"defaultTab,omitempty"`
	Description                *string  `json:"description,omitempty"`
	FeaturedChannelsTitle      *string  `json:"featuredChannelsTitle,omitempty"`
	FeaturedChannelsUrls       []string `json:"featuredChannelsUrls,omitempty"`
	Keywords                   *string  `json:"keywords,omitempty"`
	ModerateComments           *bool    `json:"moderateComments,omitempty"`
	ProfileColor               *string  `json:"profileColor,omitempty"`
	ShowBrowseView             *bool    `json:"showBrowseView,omitempty"`
	ShowRelatedChannels        *bool    `json:"showRelatedChannels,omitempty"`
	Title                      *string  `json:"title,omitempty"`
	TrackingAnalyticsAccountID *string  `json:"trackingAnalyticsAccountId,omitempty"`
	UnsubscribedTrailer        *string  `json:"unsubscribedTrailer,omitempty"`
}
