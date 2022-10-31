package operations

import (
"openapi/pkg/models/shared")

type CreateKeyQueryParams struct {
    App string `queryParam:"style=form,explode=true,name=app"`
    
}

type CreateKeySecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateKeyRequest struct {
    QueryParams CreateKeyQueryParams 
    Security CreateKeySecurity 
    
}

type CreateKeyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

