package operations

import (
"openapi/pkg/models/shared")

type CreateCallSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateCallRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security CreateCallSecurity 
    
}

type CreateCallResponse struct {
    ContentType string 
    CreateCallResponse *shared.CreateCallResponse 
    StatusCode int64 
    
}

