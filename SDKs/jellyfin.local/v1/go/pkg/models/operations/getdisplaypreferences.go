package operations

import (
"openapi/pkg/models/shared")

type GetDisplayPreferencesPathParams struct {
    DisplayPreferencesID string `pathParam:"style=simple,explode=false,name=displayPreferencesId"`
    
}

type GetDisplayPreferencesQueryParams struct {
    Client string `queryParam:"style=form,explode=true,name=client"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetDisplayPreferencesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDisplayPreferencesRequest struct {
    PathParams GetDisplayPreferencesPathParams 
    QueryParams GetDisplayPreferencesQueryParams 
    Security GetDisplayPreferencesSecurity 
    
}

type GetDisplayPreferencesResponse struct {
    ContentType string 
    DisplayPreferencesDto *shared.DisplayPreferencesDto 
    StatusCode int64 
    
}

