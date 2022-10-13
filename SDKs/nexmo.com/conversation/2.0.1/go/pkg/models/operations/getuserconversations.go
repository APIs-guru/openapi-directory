package operations

import (
	"openapi/pkg/models/shared"
)

type GetuserConversationsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetuserConversationsRequest struct {
	PathParams GetuserConversationsPathParams
}

type GetuserConversations200ApplicationJSONTimestamp struct {
	Created *string `json:"created"`
}

type GetuserConversations200ApplicationJSON struct {
	DisplayName    *string                                          `json:"display_name"`
	Href           *string                                          `json:"href"`
	ID             *string                                          `json:"id"`
	ImageURL       *string                                          `json:"image_url"`
	MemberID       *string                                          `json:"member_id"`
	Name           *string                                          `json:"name"`
	SequenceNumber *int64                                           `json:"sequence_number"`
	State          *shared.MemberStateEnum                          `json:"state"`
	Timestamp      *GetuserConversations200ApplicationJSONTimestamp `json:"timestamp"`
}

type GetuserConversationsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetuserConversations200ApplicationJSONObjects []GetuserConversations200ApplicationJSON
}
