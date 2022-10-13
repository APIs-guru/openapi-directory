package operations

import (
	"openapi/pkg/models/shared"
)

type GetTicketPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type GetTicketSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTicketSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetTicketSecurity struct {
	Option1 *GetTicketSecurityOption1 `security:"option"`
	Option2 *GetTicketSecurityOption2 `security:"option"`
}

type GetTicketRequest struct {
	PathParams GetTicketPathParams
	Security   GetTicketSecurity
}

type GetTicketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetTicketResponse struct {
	ContentType                           string
	StatusCode                            int64
	SupportTicket                         *shared.SupportTicket
	GetTicketDefaultApplicationJSONObject *GetTicketDefaultApplicationJSON
}
