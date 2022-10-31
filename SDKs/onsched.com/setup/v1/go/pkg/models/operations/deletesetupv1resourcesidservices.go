package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ResourcesIDServicesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ResourcesIDServicesRequest struct {
    PathParams DeleteSetupV1ResourcesIDServicesPathParams 
    
}

type DeleteSetupV1ResourcesIDServicesResponse struct {
    ContentType string 
    ResourceViewModel *shared.ResourceViewModel 
    StatusCode int64 
    
}

