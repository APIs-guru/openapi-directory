package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1LocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1LocationsIDQueryParams struct {
    RemoveRegion *bool `queryParam:"style=form,explode=true,name=removeRegion"`
    
}

type PutSetupV1LocationsIDRequests struct {
    LocationUpdateModel *shared.LocationUpdateModel `request:"mediaType=application/*+json"`
    LocationUpdateModel1 *shared.LocationUpdateModel `request:"mediaType=application/json"`
    LocationUpdateModel2 *shared.LocationUpdateModel `request:"mediaType=application/json-patch+json"`
    LocationUpdateModel3 *shared.LocationUpdateModel `request:"mediaType=text/json"`
    
}

type PutSetupV1LocationsIDRequest struct {
    PathParams PutSetupV1LocationsIDPathParams 
    QueryParams PutSetupV1LocationsIDQueryParams 
    Request *PutSetupV1LocationsIDRequests 
    
}

type PutSetupV1LocationsIDResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

