package operations

import (
"openapi/pkg/models/shared")

type CreateTicketSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateTicketSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateTicketSecurity struct {
    Option1 *CreateTicketSecurityOption1 `security:"option"`
    Option2 *CreateTicketSecurityOption2 `security:"option"`
    
}

type CreateTicketRequest struct {
    Request *shared.SupportTicketRequest `request:"mediaType=application/json"`
    Security CreateTicketSecurity 
    
}

type CreateTicketDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateTicketResponse struct {
    ContentType string 
    StatusCode int64 
    SupportTicket *shared.SupportTicket 
    CreateTicketDefaultApplicationJSONObject *CreateTicketDefaultApplicationJSON 
    
}

