package operations

import (
	"openapi/pkg/models/shared"
)

type CloseTicketPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type CloseTicketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CloseTicketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CloseTicketRequest struct {
	PathParams CloseTicketPathParams
	Security   CloseTicketSecurity
}

type CloseTicketResponse struct {
	ContentType                             string
	StatusCode                              int64
	CloseTicket200ApplicationJSONObject     map[string]interface{}
	CloseTicketDefaultApplicationJSONObject *CloseTicketDefaultApplicationJSON
}
