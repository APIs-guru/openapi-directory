package operations

import (
"openapi/pkg/models/shared")

type GetProgramPathParams struct {
    ProgramID string `pathParam:"style=simple,explode=false,name=programId"`
    
}

type GetProgramQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetProgramSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetProgramRequest struct {
    PathParams GetProgramPathParams 
    QueryParams GetProgramQueryParams 
    Security GetProgramSecurity 
    
}

type GetProgramResponse struct {
    BaseItemDto *shared.BaseItemDto 
    ContentType string 
    StatusCode int64 
    
}

