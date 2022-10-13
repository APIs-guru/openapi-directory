package shared

type ChannelSectionSnippetStyleEnum string

const (
	ChannelSectionSnippetStyleEnumChannelsectionStyleUnspecified ChannelSectionSnippetStyleEnum = "channelsectionStyleUnspecified"
	ChannelSectionSnippetStyleEnumHorizontalRow                  ChannelSectionSnippetStyleEnum = "horizontalRow"
	ChannelSectionSnippetStyleEnumVerticalList                   ChannelSectionSnippetStyleEnum = "verticalList"
)

type ChannelSectionSnippetTypeEnum string

const (
	ChannelSectionSnippetTypeEnumChannelsectionTypeUndefined ChannelSectionSnippetTypeEnum = "channelsectionTypeUndefined"
	ChannelSectionSnippetTypeEnumSinglePlaylist              ChannelSectionSnippetTypeEnum = "singlePlaylist"
	ChannelSectionSnippetTypeEnumMultiplePlaylists           ChannelSectionSnippetTypeEnum = "multiplePlaylists"
	ChannelSectionSnippetTypeEnumPopularUploads              ChannelSectionSnippetTypeEnum = "popularUploads"
	ChannelSectionSnippetTypeEnumRecentUploads               ChannelSectionSnippetTypeEnum = "recentUploads"
	ChannelSectionSnippetTypeEnumLikes                       ChannelSectionSnippetTypeEnum = "likes"
	ChannelSectionSnippetTypeEnumAllPlaylists                ChannelSectionSnippetTypeEnum = "allPlaylists"
	ChannelSectionSnippetTypeEnumLikedPlaylists              ChannelSectionSnippetTypeEnum = "likedPlaylists"
	ChannelSectionSnippetTypeEnumRecentPosts                 ChannelSectionSnippetTypeEnum = "recentPosts"
	ChannelSectionSnippetTypeEnumRecentActivity              ChannelSectionSnippetTypeEnum = "recentActivity"
	ChannelSectionSnippetTypeEnumLiveEvents                  ChannelSectionSnippetTypeEnum = "liveEvents"
	ChannelSectionSnippetTypeEnumUpcomingEvents              ChannelSectionSnippetTypeEnum = "upcomingEvents"
	ChannelSectionSnippetTypeEnumCompletedEvents             ChannelSectionSnippetTypeEnum = "completedEvents"
	ChannelSectionSnippetTypeEnumMultipleChannels            ChannelSectionSnippetTypeEnum = "multipleChannels"
	ChannelSectionSnippetTypeEnumPostedVideos                ChannelSectionSnippetTypeEnum = "postedVideos"
	ChannelSectionSnippetTypeEnumPostedPlaylists             ChannelSectionSnippetTypeEnum = "postedPlaylists"
	ChannelSectionSnippetTypeEnumSubscriptions               ChannelSectionSnippetTypeEnum = "subscriptions"
)

type ChannelSectionSnippet struct {
	ChannelID       *string                         `json:"channelId"`
	DefaultLanguage *string                         `json:"defaultLanguage"`
	Localized       *ChannelSectionLocalization     `json:"localized"`
	Position        *int64                          `json:"position"`
	Style           *ChannelSectionSnippetStyleEnum `json:"style"`
	Title           *string                         `json:"title"`
	Type            *ChannelSectionSnippetTypeEnum  `json:"type"`
}
