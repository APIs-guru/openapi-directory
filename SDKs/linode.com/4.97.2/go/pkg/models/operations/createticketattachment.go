package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTicketAttachmentPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type CreateTicketAttachmentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateTicketAttachmentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateTicketAttachmentRequest struct {
	PathParams CreateTicketAttachmentPathParams
	Request    interface{} `request:"mediaType=multipart/form-data"`
	Security   CreateTicketAttachmentSecurity
}

type CreateTicketAttachmentResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateTicketAttachment200ApplicationJSONObject     map[string]interface{}
	CreateTicketAttachmentDefaultApplicationJSONObject *CreateTicketAttachmentDefaultApplicationJSON
}
