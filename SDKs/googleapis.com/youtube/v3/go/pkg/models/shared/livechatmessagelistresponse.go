package shared

import (
	"time"
)

type LiveChatMessageListResponse struct {
	Etag                  *string                `json:"etag"`
	EventID               *string                `json:"eventId"`
	Items                 []LiveChatMessage      `json:"items"`
	Kind                  *string                `json:"kind"`
	NextPageToken         *string                `json:"nextPageToken"`
	OfflineAt             *time.Time             `json:"offlineAt"`
	PageInfo              *PageInfo              `json:"pageInfo"`
	PollingIntervalMillis *int64                 `json:"pollingIntervalMillis"`
	TokenPagination       map[string]interface{} `json:"tokenPagination"`
	VisitorID             *string                `json:"visitorId"`
}
