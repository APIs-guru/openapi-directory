package operations

import (
"openapi/pkg/models/shared")

type PostEventsV3SendSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostEventsV3SendSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostEventsV3SendSecurity struct {
    Option1 *PostEventsV3SendSecurityOption1 `security:"option"`
    Option2 *PostEventsV3SendSecurityOption2 `security:"option"`
    
}

type PostEventsV3SendRequest struct {
    Request shared.BehavioralEventHTTPCompletionRequest `request:"mediaType=application/json"`
    Security PostEventsV3SendSecurity 
    
}

type PostEventsV3SendResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

