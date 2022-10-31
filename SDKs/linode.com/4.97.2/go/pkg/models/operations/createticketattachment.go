package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTicketAttachmentPathParams struct {
	TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
}

type CreateTicketAttachmentSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateTicketAttachmentSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateTicketAttachmentSecurity struct {
	Option1 *CreateTicketAttachmentSecurityOption1 `security:"option"`
	Option2 *CreateTicketAttachmentSecurityOption2 `security:"option"`
}

type CreateTicketAttachmentRequest struct {
	PathParams CreateTicketAttachmentPathParams
	Request    interface{} `request:"mediaType=multipart/form-data"`
	Security   CreateTicketAttachmentSecurity
}

type CreateTicketAttachmentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateTicketAttachmentResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateTicketAttachment200ApplicationJSONObject     map[string]interface{}
	CreateTicketAttachmentDefaultApplicationJSONObject *CreateTicketAttachmentDefaultApplicationJSON
}
