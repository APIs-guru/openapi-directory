package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMemberPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

// CreateMemberRequestBody
// Create a Member in invite state
type CreateMemberRequestBody struct {
	Action           *shared.MemberActionEnum `json:"action,omitempty"`
	Channel          shared.Channel           `json:"channel"`
	KnockingID       *string                  `json:"knocking_id,omitempty"`
	Media            map[string]interface{}   `json:"media,omitempty"`
	MemberID         *string                  `json:"member_id,omitempty"`
	MemberIDInviting *string                  `json:"member_id_inviting,omitempty"`
	UserID           string                   `json:"user_id"`
}

type CreateMember201ApplicationJSON struct {
	Channel   *shared.Channel            `json:"channel,omitempty"`
	Href      *string                    `json:"href,omitempty"`
	ID        *string                    `json:"id,omitempty"`
	Initiator *shared.Initiator          `json:"initiator,omitempty"`
	State     *shared.MemberStateEnum    `json:"state,omitempty"`
	Timestamp *shared.TimestampResMember `json:"timestamp,omitempty"`
	UserID    *string                    `json:"user_id,omitempty"`
}

type CreateMemberRequest struct {
	PathParams CreateMemberPathParams
	Request    *CreateMemberRequestBody `request:"mediaType=application/json"`
}

type CreateMemberResponse struct {
	ContentType                          string
	StatusCode                           int64
	CreateMember201ApplicationJSONObject *CreateMember201ApplicationJSON
}
