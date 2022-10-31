package operations

import (
"openapi/pkg/models/shared")

type GetRemoteSearchImageQueryParams struct {
    ImageURL string `queryParam:"style=form,explode=true,name=imageUrl"`
    ProviderName string `queryParam:"style=form,explode=true,name=providerName"`
    
}

type GetRemoteSearchImageSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRemoteSearchImageRequest struct {
    QueryParams GetRemoteSearchImageQueryParams 
    Security GetRemoteSearchImageSecurity 
    
}

type GetRemoteSearchImageResponse struct {
    ContentType string 
    GetRemoteSearchImage200ImageWildcardBinaryString []byte 
    StatusCode int64 
    
}

