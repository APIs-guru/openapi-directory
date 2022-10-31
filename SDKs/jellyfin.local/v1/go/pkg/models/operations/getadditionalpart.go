package operations

import (
"openapi/pkg/models/shared")

type GetAdditionalPartPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetAdditionalPartQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetAdditionalPartSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAdditionalPartRequest struct {
    PathParams GetAdditionalPartPathParams 
    QueryParams GetAdditionalPartQueryParams 
    Security GetAdditionalPartSecurity 
    
}

type GetAdditionalPartResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

