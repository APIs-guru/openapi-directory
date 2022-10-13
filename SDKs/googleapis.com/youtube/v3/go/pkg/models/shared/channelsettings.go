package shared

type ChannelSettings struct {
	Country                    *string  `json:"country"`
	DefaultLanguage            *string  `json:"defaultLanguage"`
	DefaultTab                 *string  `json:"defaultTab"`
	Description                *string  `json:"description"`
	FeaturedChannelsTitle      *string  `json:"featuredChannelsTitle"`
	FeaturedChannelsUrls       []string `json:"featuredChannelsUrls"`
	Keywords                   *string  `json:"keywords"`
	ModerateComments           *bool    `json:"moderateComments"`
	ProfileColor               *string  `json:"profileColor"`
	ShowBrowseView             *bool    `json:"showBrowseView"`
	ShowRelatedChannels        *bool    `json:"showRelatedChannels"`
	Title                      *string  `json:"title"`
	TrackingAnalyticsAccountID *string  `json:"trackingAnalyticsAccountId"`
	UnsubscribedTrailer        *string  `json:"unsubscribedTrailer"`
}
