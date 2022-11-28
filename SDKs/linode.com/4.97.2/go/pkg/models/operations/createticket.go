package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTicketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateTicketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateTicketRequest struct {
	Request  *shared.SupportTicketRequest `request:"mediaType=application/json"`
	Security CreateTicketSecurity
}

type CreateTicketResponse struct {
	ContentType                              string
	StatusCode                               int64
	SupportTicket                            *shared.SupportTicket
	CreateTicketDefaultApplicationJSONObject *CreateTicketDefaultApplicationJSON
}
