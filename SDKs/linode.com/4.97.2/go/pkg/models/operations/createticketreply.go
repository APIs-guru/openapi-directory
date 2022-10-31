package operations

import (
"openapi/pkg/models/shared")

type CreateTicketReplyPathParams struct {
    TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
    
}

type CreateTicketReplySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateTicketReplySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateTicketReplySecurity struct {
    Option1 *CreateTicketReplySecurityOption1 `security:"option"`
    Option2 *CreateTicketReplySecurityOption2 `security:"option"`
    
}

type CreateTicketReplyRequest struct {
    PathParams CreateTicketReplyPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security CreateTicketReplySecurity 
    
}

type CreateTicketReplyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateTicketReplyResponse struct {
    ContentType string 
    StatusCode int64 
    SupportTicketReply *shared.SupportTicketReply 
    CreateTicketReplyDefaultApplicationJSONObject *CreateTicketReplyDefaultApplicationJSON 
    
}

