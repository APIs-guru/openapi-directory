package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTicketReplyPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type CreateTicketReplySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateTicketReplyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateTicketReplyRequest struct {
	PathParams CreateTicketReplyPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   CreateTicketReplySecurity
}

type CreateTicketReplyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	SupportTicketReply                            *shared.SupportTicketReply
	CreateTicketReplyDefaultApplicationJSONObject *CreateTicketReplyDefaultApplicationJSON
}
