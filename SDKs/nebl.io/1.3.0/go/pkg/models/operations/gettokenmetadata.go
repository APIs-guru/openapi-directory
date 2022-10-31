package operations

import (
"openapi/pkg/models/shared")

type GetTokenMetadataPathParams struct {
    Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
    
}

type GetTokenMetadataQueryParams struct {
    Verbosity *float64 `queryParam:"style=form,explode=true,name=verbosity"`
    
}

type GetTokenMetadataRequest struct {
    PathParams GetTokenMetadataPathParams 
    QueryParams GetTokenMetadataQueryParams 
    
}

type GetTokenMetadataResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    GetTokenMetadataResponse *shared.GetTokenMetadataResponse 
    
}

