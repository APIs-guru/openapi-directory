package operations

import (
"openapi/pkg/models/shared")

type GetLibraryOptionsInfoQueryParams struct {
    IsNewLibrary *bool `queryParam:"style=form,explode=true,name=isNewLibrary"`
    LibraryContentType *string `queryParam:"style=form,explode=true,name=libraryContentType"`
    
}

type GetLibraryOptionsInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLibraryOptionsInfoRequest struct {
    QueryParams GetLibraryOptionsInfoQueryParams 
    Security GetLibraryOptionsInfoSecurity 
    
}

type GetLibraryOptionsInfoResponse struct {
    ContentType string 
    LibraryOptionsResultDto *shared.LibraryOptionsResultDto 
    StatusCode int64 
    
}

