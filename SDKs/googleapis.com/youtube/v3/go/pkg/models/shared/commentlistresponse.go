package shared



type CommentListResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []Comment `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PageInfo *PageInfo `json:"pageInfo,omitempty"`
    TokenPagination map[string]interface{} `json:"tokenPagination,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

