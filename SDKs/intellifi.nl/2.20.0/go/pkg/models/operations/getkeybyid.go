package operations

import (
"openapi/pkg/models/shared")

type GetKeyByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetKeyByIDSecurity struct {
    CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type GetKeyByIDRequest struct {
    PathParams GetKeyByIDPathParams 
    Security GetKeyByIDSecurity 
    
}

type GetKeyByIDResponse struct {
    ContentType string 
    Key *shared.Key 
    StatusCode int64 
    
}

