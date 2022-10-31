package operations

import (
"openapi/pkg/models/shared")

type DcimSitesGraphsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimSitesGraphsRequest struct {
    PathParams DcimSitesGraphsPathParams 
    
}

type DcimSitesGraphsResponse struct {
    ContentType string 
    Site *shared.Site 
    StatusCode int64 
    
}

