package operations

import (
"openapi/pkg/models/shared")

type GetUsersQueryParams struct {
    IsDisabled *bool `queryParam:"style=form,explode=true,name=isDisabled"`
    IsHidden *bool `queryParam:"style=form,explode=true,name=isHidden"`
    
}

type GetUsersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUsersRequest struct {
    QueryParams GetUsersQueryParams 
    Security GetUsersSecurity 
    
}

type GetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    UserDtos []shared.UserDto 
    
}

