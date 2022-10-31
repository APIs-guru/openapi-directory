package shared

import (
"time")

type LiveChatMessageListResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []LiveChatMessage `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    OfflineAt *time.Time `json:"offlineAt,omitempty"`
    PageInfo *PageInfo `json:"pageInfo,omitempty"`
    PollingIntervalMillis *int64 `json:"pollingIntervalMillis,omitempty"`
    TokenPagination map[string]interface{} `json:"tokenPagination,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

