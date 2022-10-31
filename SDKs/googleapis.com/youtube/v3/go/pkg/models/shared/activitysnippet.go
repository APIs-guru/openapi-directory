package shared

import (
"time")


type ActivitySnippetTypeEnum string

const (
    ActivitySnippetTypeEnumTypeUnspecified ActivitySnippetTypeEnum = "typeUnspecified"
ActivitySnippetTypeEnumUpload ActivitySnippetTypeEnum = "upload"
ActivitySnippetTypeEnumLike ActivitySnippetTypeEnum = "like"
ActivitySnippetTypeEnumFavorite ActivitySnippetTypeEnum = "favorite"
ActivitySnippetTypeEnumComment ActivitySnippetTypeEnum = "comment"
ActivitySnippetTypeEnumSubscription ActivitySnippetTypeEnum = "subscription"
ActivitySnippetTypeEnumPlaylistItem ActivitySnippetTypeEnum = "playlistItem"
ActivitySnippetTypeEnumRecommendation ActivitySnippetTypeEnum = "recommendation"
ActivitySnippetTypeEnumBulletin ActivitySnippetTypeEnum = "bulletin"
ActivitySnippetTypeEnumSocial ActivitySnippetTypeEnum = "social"
ActivitySnippetTypeEnumChannelItem ActivitySnippetTypeEnum = "channelItem"
ActivitySnippetTypeEnumPromotedItem ActivitySnippetTypeEnum = "promotedItem"
)


type ActivitySnippet struct {
    ChannelID *string `json:"channelId,omitempty"`
    ChannelTitle *string `json:"channelTitle,omitempty"`
    Description *string `json:"description,omitempty"`
    GroupID *string `json:"groupId,omitempty"`
    PublishedAt *time.Time `json:"publishedAt,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *ActivitySnippetTypeEnum `json:"type,omitempty"`
    
}

