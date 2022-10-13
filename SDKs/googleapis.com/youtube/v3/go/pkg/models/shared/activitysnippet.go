package shared

import (
	"time"
)

type ActivitySnippetTypeEnum string

const (
	ActivitySnippetTypeEnumTypeUnspecified ActivitySnippetTypeEnum = "typeUnspecified"
	ActivitySnippetTypeEnumUpload          ActivitySnippetTypeEnum = "upload"
	ActivitySnippetTypeEnumLike            ActivitySnippetTypeEnum = "like"
	ActivitySnippetTypeEnumFavorite        ActivitySnippetTypeEnum = "favorite"
	ActivitySnippetTypeEnumComment         ActivitySnippetTypeEnum = "comment"
	ActivitySnippetTypeEnumSubscription    ActivitySnippetTypeEnum = "subscription"
	ActivitySnippetTypeEnumPlaylistItem    ActivitySnippetTypeEnum = "playlistItem"
	ActivitySnippetTypeEnumRecommendation  ActivitySnippetTypeEnum = "recommendation"
	ActivitySnippetTypeEnumBulletin        ActivitySnippetTypeEnum = "bulletin"
	ActivitySnippetTypeEnumSocial          ActivitySnippetTypeEnum = "social"
	ActivitySnippetTypeEnumChannelItem     ActivitySnippetTypeEnum = "channelItem"
	ActivitySnippetTypeEnumPromotedItem    ActivitySnippetTypeEnum = "promotedItem"
)

type ActivitySnippet struct {
	ChannelID    *string                  `json:"channelId"`
	ChannelTitle *string                  `json:"channelTitle"`
	Description  *string                  `json:"description"`
	GroupID      *string                  `json:"groupId"`
	PublishedAt  *time.Time               `json:"publishedAt"`
	Thumbnails   *ThumbnailDetails        `json:"thumbnails"`
	Title        *string                  `json:"title"`
	Type         *ActivitySnippetTypeEnum `json:"type"`
}
