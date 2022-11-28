package operations

import (
	"openapi/pkg/models/shared"
)

type GetuserConversationsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetuserConversations200ApplicationJSONTimestamp struct {
	Created *string `json:"created,omitempty"`
}

type GetuserConversations200ApplicationJSON struct {
	DisplayName    *string                                          `json:"display_name,omitempty"`
	Href           *string                                          `json:"href,omitempty"`
	ID             *string                                          `json:"id,omitempty"`
	ImageURL       *string                                          `json:"image_url,omitempty"`
	MemberID       *string                                          `json:"member_id,omitempty"`
	Name           *string                                          `json:"name,omitempty"`
	SequenceNumber *int64                                           `json:"sequence_number,omitempty"`
	State          *shared.MemberStateEnum                          `json:"state,omitempty"`
	Timestamp      *GetuserConversations200ApplicationJSONTimestamp `json:"timestamp,omitempty"`
}

type GetuserConversationsRequest struct {
	PathParams GetuserConversationsPathParams
}

type GetuserConversationsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetuserConversations200ApplicationJSONObjects []GetuserConversations200ApplicationJSON
}
