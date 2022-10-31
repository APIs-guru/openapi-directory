package operations

import (
"openapi/pkg/models/shared")

type CloseTicketPathParams struct {
    TicketID int64 `pathParam:"style=simple,explode=false,name=ticketId"`
    
}

type CloseTicketSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CloseTicketSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CloseTicketSecurity struct {
    Option1 *CloseTicketSecurityOption1 `security:"option"`
    Option2 *CloseTicketSecurityOption2 `security:"option"`
    
}

type CloseTicketRequest struct {
    PathParams CloseTicketPathParams 
    Security CloseTicketSecurity 
    
}

type CloseTicketDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CloseTicketResponse struct {
    ContentType string 
    StatusCode int64 
    CloseTicket200ApplicationJSONObject map[string]interface{} 
    CloseTicketDefaultApplicationJSONObject *CloseTicketDefaultApplicationJSON 
    
}

