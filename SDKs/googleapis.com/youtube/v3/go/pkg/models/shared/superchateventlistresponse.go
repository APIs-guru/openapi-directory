package shared

type SuperChatEventListResponse struct {
	Etag            *string                `json:"etag,omitempty"`
	EventID         *string                `json:"eventId,omitempty"`
	Items           []SuperChatEvent       `json:"items,omitempty"`
	Kind            *string                `json:"kind,omitempty"`
	NextPageToken   *string                `json:"nextPageToken,omitempty"`
	PageInfo        *PageInfo              `json:"pageInfo,omitempty"`
	TokenPagination map[string]interface{} `json:"tokenPagination,omitempty"`
	VisitorID       *string                `json:"visitorId,omitempty"`
}
