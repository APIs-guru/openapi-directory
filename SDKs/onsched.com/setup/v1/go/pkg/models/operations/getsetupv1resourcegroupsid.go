package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcegroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ResourcegroupsIDRequest struct {
    PathParams GetSetupV1ResourcegroupsIDPathParams 
    
}

type GetSetupV1ResourcegroupsIDResponse struct {
    ContentType string 
    ResourceGroupViewModel *shared.ResourceGroupViewModel 
    StatusCode int64 
    
}

