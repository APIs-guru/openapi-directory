package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1CompaniesRegionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1CompaniesRegionsIDRequest struct {
    PathParams DeleteSetupV1CompaniesRegionsIDPathParams 
    
}

type DeleteSetupV1CompaniesRegionsIDResponse struct {
    ContentType string 
    RegionViewModel *shared.RegionViewModel 
    StatusCode int64 
    
}

