package operations

import (
"openapi/pkg/models/shared")

type StopStreamPathParams struct {
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type StopStreamSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type StopStreamRequest struct {
    PathParams StopStreamPathParams 
    Security StopStreamSecurity 
    
}

type StopStreamResponse struct {
    ContentType string 
    StatusCode int64 
    StopStreamResponse *shared.StopStreamResponse 
    
}

