package operations

import (
"openapi/pkg/models/shared")

type DcimSitesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimSitesUpdateRequest struct {
    PathParams DcimSitesUpdatePathParams 
    Request shared.WritableSite `request:"mediaType=application/json"`
    
}

type DcimSitesUpdateResponse struct {
    ContentType string 
    Site *shared.Site 
    StatusCode int64 
    
}

