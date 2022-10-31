package operations

import (
"openapi/pkg/models/shared")

type StartTalkPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type StartTalkSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type StartTalkRequest struct {
    PathParams StartTalkPathParams 
    Request *shared.StartTalkRequest `request:"mediaType=application/json"`
    Security StartTalkSecurity 
    
}

type StartTalkResponse struct {
    ContentType string 
    StartTalkResponse *shared.StartTalkResponse 
    StatusCode int64 
    
}

