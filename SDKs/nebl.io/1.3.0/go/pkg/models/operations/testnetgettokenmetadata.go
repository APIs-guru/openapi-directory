package operations

import (
"openapi/pkg/models/shared")

type TestnetGetTokenMetadataPathParams struct {
    Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
    
}

type TestnetGetTokenMetadataQueryParams struct {
    Verbosity *float64 `queryParam:"style=form,explode=true,name=verbosity"`
    
}

type TestnetGetTokenMetadataRequest struct {
    PathParams TestnetGetTokenMetadataPathParams 
    QueryParams TestnetGetTokenMetadataQueryParams 
    
}

type TestnetGetTokenMetadataResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    GetTokenMetadataResponse *shared.GetTokenMetadataResponse 
    
}

