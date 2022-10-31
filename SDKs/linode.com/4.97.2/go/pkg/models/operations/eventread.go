package operations

import (
"openapi/pkg/models/shared")

type EventReadPathParams struct {
    EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
    
}

type EventReadSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type EventReadSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type EventReadSecurity struct {
    Option1 *EventReadSecurityOption1 `security:"option"`
    Option2 *EventReadSecurityOption2 `security:"option"`
    
}

type EventReadRequest struct {
    PathParams EventReadPathParams 
    Security EventReadSecurity 
    
}

type EventReadDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type EventReadResponse struct {
    ContentType string 
    StatusCode int64 
    EventRead200ApplicationJSONObject map[string]interface{} 
    EventReadDefaultApplicationJSONObject *EventReadDefaultApplicationJSON 
    
}

