package operations

import (
"openapi/pkg/models/shared")

type DcimSitesCreateRequest struct {
    Request shared.WritableSite `request:"mediaType=application/json"`
    
}

type DcimSitesCreateResponse struct {
    ContentType string 
    Site *shared.Site 
    StatusCode int64 
    
}

