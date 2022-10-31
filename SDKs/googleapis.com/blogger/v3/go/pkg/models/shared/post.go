package shared



type PostAuthorImage struct {
    URL *string `json:"url,omitempty"`
    
}

type PostAuthor struct {
    DisplayName *string `json:"displayName,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *PostAuthorImage `json:"image,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PostBlog struct {
    ID *string `json:"id,omitempty"`
    
}

type PostImages struct {
    URL *string `json:"url,omitempty"`
    
}

type PostLocation struct {
    Lat *float64 `json:"lat,omitempty"`
    Lng *float64 `json:"lng,omitempty"`
    Name *string `json:"name,omitempty"`
    Span *string `json:"span,omitempty"`
    
}


type PostReaderCommentsEnum string

const (
    PostReaderCommentsEnumAllow PostReaderCommentsEnum = "ALLOW"
PostReaderCommentsEnumDontAllowShowExisting PostReaderCommentsEnum = "DONT_ALLOW_SHOW_EXISTING"
PostReaderCommentsEnumDontAllowHideExisting PostReaderCommentsEnum = "DONT_ALLOW_HIDE_EXISTING"
)


type PostReplies struct {
    Items []Comment `json:"items,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    TotalItems *string `json:"totalItems,omitempty"`
    
}


type PostStatusEnum string

const (
    PostStatusEnumLive PostStatusEnum = "LIVE"
PostStatusEnumDraft PostStatusEnum = "DRAFT"
PostStatusEnumScheduled PostStatusEnum = "SCHEDULED"
PostStatusEnumSoftTrashed PostStatusEnum = "SOFT_TRASHED"
)


type Post struct {
    Author *PostAuthor `json:"author,omitempty"`
    Blog *PostBlog `json:"blog,omitempty"`
    Content *string `json:"content,omitempty"`
    CustomMetaData *string `json:"customMetaData,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Images []PostImages `json:"images,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Labels []string `json:"labels,omitempty"`
    Location *PostLocation `json:"location,omitempty"`
    Published *string `json:"published,omitempty"`
    ReaderComments *PostReaderCommentsEnum `json:"readerComments,omitempty"`
    Replies *PostReplies `json:"replies,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Status *PostStatusEnum `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    TitleLink *string `json:"titleLink,omitempty"`
    Trashed *string `json:"trashed,omitempty"`
    Updated *string `json:"updated,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

