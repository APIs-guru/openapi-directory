package operations

import (
"openapi/pkg/models/shared")

type UpdateNamedConfigurationPathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    
}

type UpdateNamedConfigurationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateNamedConfigurationRequest struct {
    PathParams UpdateNamedConfigurationPathParams 
    Security UpdateNamedConfigurationSecurity 
    
}

type UpdateNamedConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

