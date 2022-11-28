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

// ChannelSectionSnippet
// Basic details about a channel section, including title, style and position.
type ChannelSectionSnippet struct {
	ChannelID       *string                         `json:"channelId,omitempty"`
	DefaultLanguage *string                         `json:"defaultLanguage,omitempty"`
	Localized       *ChannelSectionLocalization     `json:"localized,omitempty"`
	Position        *int64                          `json:"position,omitempty"`
	Style           *ChannelSectionSnippetStyleEnum `json:"style,omitempty"`
	Title           *string                         `json:"title,omitempty"`
	Type            *ChannelSectionSnippetTypeEnum  `json:"type,omitempty"`
}
