package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveConversationPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type RetrieveConversationRequest struct {
	PathParams RetrieveConversationPathParams
}

type RetrieveConversation200ApplicationJSONMembers struct {
	Channel   *shared.Channel            `json:"channel"`
	Initiator *shared.Initiator          `json:"initiator"`
	MemberID  *string                    `json:"member_id"`
	Name      *string                    `json:"name"`
	State     *shared.MemberStateEnum    `json:"state"`
	Timestamp *shared.TimestampResMember `json:"timestamp"`
	UserID    *string                    `json:"user_id"`
}

type RetrieveConversation200ApplicationJSONProperties struct {
	Video *bool `json:"video"`
}

type RetrieveConversation200ApplicationJSON struct {
	Links          *shared.LinksConversation                         `json:"_links"`
	APIKey         *string                                           `json:"api_key"`
	DisplayName    *string                                           `json:"display_name"`
	Members        []RetrieveConversation200ApplicationJSONMembers   `json:"members"`
	Name           *string                                           `json:"name"`
	Numbers        map[string]interface{}                            `json:"numbers"`
	Properties     *RetrieveConversation200ApplicationJSONProperties `json:"properties"`
	SequenceNumber *string                                           `json:"sequence_number"`
	Timestamp      *shared.TimestampResConversation                  `json:"timestamp"`
	UUID           string                                            `json:"uuid"`
}

type RetrieveConversationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	RetrieveConversation200ApplicationJSONObject *RetrieveConversation200ApplicationJSON
}
