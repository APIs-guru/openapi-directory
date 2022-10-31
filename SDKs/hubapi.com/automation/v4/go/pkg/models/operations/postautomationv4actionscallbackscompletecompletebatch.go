package operations

import (
"openapi/pkg/models/shared")

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity struct {
    Option1 *PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1 `security:"option"`
    Option2 *PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2 `security:"option"`
    
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest struct {
    Request shared.BatchInputCallbackCompletionBatchRequest `request:"mediaType=application/json"`
    Security PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity 
    
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

