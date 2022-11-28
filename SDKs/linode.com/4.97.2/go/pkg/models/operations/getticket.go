package operations

import (
	"openapi/pkg/models/shared"
)

type GetTicketPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type GetTicketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTicketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTicketRequest struct {
	PathParams GetTicketPathParams
	Security   GetTicketSecurity
}

type GetTicketResponse struct {
	ContentType                           string
	StatusCode                            int64
	SupportTicket                         *shared.SupportTicket
	GetTicketDefaultApplicationJSONObject *GetTicketDefaultApplicationJSON
}
