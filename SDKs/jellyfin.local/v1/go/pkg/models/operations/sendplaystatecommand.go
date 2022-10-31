package operations

import (
"openapi/pkg/models/shared")

type SendPlaystateCommandPathParams struct {
    Command shared.PlaystateCommandEnum `pathParam:"style=simple,explode=false,name=command"`
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type SendPlaystateCommandQueryParams struct {
    ControllingUserID *string `queryParam:"style=form,explode=true,name=controllingUserId"`
    SeekPositionTicks *int64 `queryParam:"style=form,explode=true,name=seekPositionTicks"`
    
}

type SendPlaystateCommandSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SendPlaystateCommandRequest struct {
    PathParams SendPlaystateCommandPathParams 
    QueryParams SendPlaystateCommandQueryParams 
    Security SendPlaystateCommandSecurity 
    
}

type SendPlaystateCommandResponse struct {
    ContentType string 
    StatusCode int64 
    
}

