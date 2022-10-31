package operations

import (
"openapi/pkg/models/shared")

type DcimRearPortTemplatesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRearPortTemplatesPartialUpdateRequest struct {
    PathParams DcimRearPortTemplatesPartialUpdatePathParams 
    Request shared.WritableRearPortTemplate `request:"mediaType=application/json"`
    
}

type DcimRearPortTemplatesPartialUpdateResponse struct {
    ContentType string 
    RearPortTemplate *shared.RearPortTemplate 
    StatusCode int64 
    
}

