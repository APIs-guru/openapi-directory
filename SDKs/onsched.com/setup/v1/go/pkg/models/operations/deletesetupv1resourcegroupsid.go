package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ResourcegroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ResourcegroupsIDRequest struct {
    PathParams DeleteSetupV1ResourcegroupsIDPathParams 
    
}

type DeleteSetupV1ResourcegroupsIDResponse struct {
    ContentType string 
    ResourceGroupViewModel *shared.ResourceGroupViewModel 
    StatusCode int64 
    
}

