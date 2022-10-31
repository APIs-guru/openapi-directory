package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1CompaniesRegionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1CompaniesRegionsIDRequests struct {
    RegionUpdateModel *shared.RegionUpdateModel `request:"mediaType=application/*+json"`
    RegionUpdateModel1 *shared.RegionUpdateModel `request:"mediaType=application/json"`
    RegionUpdateModel2 *shared.RegionUpdateModel `request:"mediaType=application/json-patch+json"`
    RegionUpdateModel3 *shared.RegionUpdateModel `request:"mediaType=text/json"`
    
}

type PutSetupV1CompaniesRegionsIDRequest struct {
    PathParams PutSetupV1CompaniesRegionsIDPathParams 
    Request *PutSetupV1CompaniesRegionsIDRequests 
    
}

type PutSetupV1CompaniesRegionsIDResponse struct {
    ContentType string 
    RegionViewModel *shared.RegionViewModel 
    StatusCode int64 
    
}

