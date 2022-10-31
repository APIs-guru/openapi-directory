package shared

import (
"time")

type CommentActorClientSpecificActorInfoYoutubeActorInfo struct {
    ChannelID *string `json:"channelId,omitempty"`
    
}

type CommentActorClientSpecificActorInfo struct {
    YoutubeActorInfo *CommentActorClientSpecificActorInfoYoutubeActorInfo `json:"youtubeActorInfo,omitempty"`
    
}

type CommentActorImage struct {
    URL *string `json:"url,omitempty"`
    
}

type CommentActorVerification struct {
    AdHocVerified *string `json:"adHocVerified,omitempty"`
    
}

type CommentActor struct {
    ClientSpecificActorInfo *CommentActorClientSpecificActorInfo `json:"clientSpecificActorInfo,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *CommentActorImage `json:"image,omitempty"`
    URL *string `json:"url,omitempty"`
    Verification *CommentActorVerification `json:"verification,omitempty"`
    
}

type CommentInReplyTo struct {
    ID *string `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type CommentObject struct {
    Content *string `json:"content,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    OriginalContent *string `json:"originalContent,omitempty"`
    
}

type CommentPlusoners struct {
    TotalItems *int64 `json:"totalItems,omitempty"`
    
}

type Comment struct {
    Actor *CommentActor `json:"actor,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    InReplyTo []CommentInReplyTo `json:"inReplyTo,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Object *CommentObject `json:"object,omitempty"`
    Plusoners *CommentPlusoners `json:"plusoners,omitempty"`
    Published *time.Time `json:"published,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    Verb *string `json:"verb,omitempty"`
    
}

