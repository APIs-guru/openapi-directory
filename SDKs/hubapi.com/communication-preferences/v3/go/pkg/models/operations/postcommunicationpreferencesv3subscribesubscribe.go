package operations

import (
"openapi/pkg/models/shared")

type PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostCommunicationPreferencesV3SubscribeSubscribeSecurity struct {
    Option1 *PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 `security:"option"`
    Option2 *PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 `security:"option"`
    Option3 *PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 `security:"option"`
    
}

type PostCommunicationPreferencesV3SubscribeSubscribeRequest struct {
    Request shared.PublicUpdateSubscriptionStatusRequest `request:"mediaType=application/json"`
    Security PostCommunicationPreferencesV3SubscribeSubscribeSecurity 
    
}

type PostCommunicationPreferencesV3SubscribeSubscribeResponse struct {
    Body []byte 
    ContentType string 
    PublicSubscriptionStatus *shared.PublicSubscriptionStatus 
    StatusCode int64 
    
}

