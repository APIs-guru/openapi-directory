package operations

import (
"openapi/pkg/models/shared")

type DcimFrontPortTemplatesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimFrontPortTemplatesPartialUpdateRequest struct {
    PathParams DcimFrontPortTemplatesPartialUpdatePathParams 
    Request shared.WritableFrontPortTemplate `request:"mediaType=application/json"`
    
}

type DcimFrontPortTemplatesPartialUpdateResponse struct {
    ContentType string 
    FrontPortTemplate *shared.FrontPortTemplate 
    StatusCode int64 
    
}

