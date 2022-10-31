package operations

import (
"openapi/pkg/models/shared")

type SendMessageCommandPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type SendMessageCommandQueryParams struct {
    Header *string `queryParam:"style=form,explode=true,name=header"`
    Text string `queryParam:"style=form,explode=true,name=text"`
    TimeoutMs *int64 `queryParam:"style=form,explode=true,name=timeoutMs"`
    
}

type SendMessageCommandSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SendMessageCommandRequest struct {
    PathParams SendMessageCommandPathParams 
    QueryParams SendMessageCommandQueryParams 
    Security SendMessageCommandSecurity 
    
}

type SendMessageCommandResponse struct {
    ContentType string 
    StatusCode int64 
    
}

