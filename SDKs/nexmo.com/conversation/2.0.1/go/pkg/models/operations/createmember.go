package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMemberPathParams struct {
	ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
}

type CreateMemberRequestBody struct {
	Action           *shared.MemberActionEnum `json:"action"`
	Channel          shared.Channel           `json:"channel"`
	KnockingID       *string                  `json:"knocking_id"`
	Media            map[string]interface{}   `json:"media"`
	MemberID         *string                  `json:"member_id"`
	MemberIDInviting *string                  `json:"member_id_inviting"`
	UserID           string                   `json:"user_id"`
}

type CreateMemberRequest struct {
	PathParams CreateMemberPathParams
	Request    *CreateMemberRequestBody `request:"mediaType=application/json"`
}

type CreateMember201ApplicationJSON struct {
	Channel   *shared.Channel            `json:"channel"`
	Href      *string                    `json:"href"`
	ID        *string                    `json:"id"`
	Initiator *shared.Initiator          `json:"initiator"`
	State     *shared.MemberStateEnum    `json:"state"`
	Timestamp *shared.TimestampResMember `json:"timestamp"`
	UserID    *string                    `json:"user_id"`
}

type CreateMemberResponse struct {
	ContentType                          string
	StatusCode                           int64
	CreateMember201ApplicationJSONObject *CreateMember201ApplicationJSON
}
