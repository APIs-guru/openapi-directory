package operations

import (
"openapi/pkg/models/shared")

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams struct {
    CallbackID string `pathParam:"style=simple,explode=false,name=callbackId"`
    
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity struct {
    Option1 *PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption1 `security:"option"`
    Option2 *PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption2 `security:"option"`
    
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest struct {
    PathParams PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams 
    Request shared.CallbackCompletionRequest `request:"mediaType=application/json"`
    Security PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity 
    
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

