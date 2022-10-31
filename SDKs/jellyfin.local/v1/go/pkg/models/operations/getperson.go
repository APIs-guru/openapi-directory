package operations

import (
"openapi/pkg/models/shared")

type GetPersonPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetPersonQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetPersonSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPersonRequest struct {
    PathParams GetPersonPathParams 
    QueryParams GetPersonQueryParams 
    Security GetPersonSecurity 
    
}

type GetPersonResponse struct {
    BaseItemDto *shared.BaseItemDto 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

