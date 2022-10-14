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
	Channel   *shared.Channel            `json:"channel,omitempty"`
	Initiator *shared.Initiator          `json:"initiator,omitempty"`
	MemberID  *string                    `json:"member_id,omitempty"`
	Name      *string                    `json:"name,omitempty"`
	State     *shared.MemberStateEnum    `json:"state,omitempty"`
	Timestamp *shared.TimestampResMember `json:"timestamp,omitempty"`
	UserID    *string                    `json:"user_id,omitempty"`
}

type RetrieveConversation200ApplicationJSONProperties struct {
	Video *bool `json:"video,omitempty"`
}

type RetrieveConversation200ApplicationJSON struct {
	Links          *shared.LinksConversation                         `json:"_links,omitempty"`
	APIKey         *string                                           `json:"api_key,omitempty"`
	DisplayName    *string                                           `json:"display_name,omitempty"`
	Members        []RetrieveConversation200ApplicationJSONMembers   `json:"members,omitempty"`
	Name           *string                                           `json:"name,omitempty"`
	Numbers        map[string]interface{}                            `json:"numbers,omitempty"`
	Properties     *RetrieveConversation200ApplicationJSONProperties `json:"properties,omitempty"`
	SequenceNumber *string                                           `json:"sequence_number,omitempty"`
	Timestamp      *shared.TimestampResConversation                  `json:"timestamp,omitempty"`
	UUID           string                                            `json:"uuid"`
}

type RetrieveConversationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	RetrieveConversation200ApplicationJSONObject *RetrieveConversation200ApplicationJSON
}
