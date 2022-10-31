package operations

import (
"openapi/pkg/models/shared")

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity struct {
    Option1 *PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1 `security:"option"`
    Option2 *PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2 `security:"option"`
    Option3 *PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3 `security:"option"`
    
}

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest struct {
    Request shared.PublicUpdateSubscriptionStatusRequest `request:"mediaType=application/json"`
    Security PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity 
    
}

type PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse struct {
    Body []byte 
    ContentType string 
    PublicSubscriptionStatus *shared.PublicSubscriptionStatus 
    StatusCode int64 
    
}

