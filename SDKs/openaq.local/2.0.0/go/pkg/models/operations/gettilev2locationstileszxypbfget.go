package operations

import (
"openapi/pkg/models/shared")

type GetTileV2LocationsTilesZXYPbfGetPathParams struct {
    X int64 `pathParam:"style=simple,explode=false,name=x"`
    Y int64 `pathParam:"style=simple,explode=false,name=y"`
    Z int64 `pathParam:"style=simple,explode=false,name=z"`
    
}

type GetTileV2LocationsTilesZXYPbfGetQueryParams struct {
    IsAnalysis *bool `queryParam:"style=form,explode=true,name=isAnalysis"`
    IsMobile *bool `queryParam:"style=form,explode=true,name=isMobile"`
    LastUpdatedFrom *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedFrom"`
    LastUpdatedTo *interface{} `queryParam:"style=form,explode=true,name=lastUpdatedTo"`
    Location []int64 `queryParam:"style=form,explode=true,name=location"`
    Parameter *interface{} `queryParam:"style=form,explode=true,name=parameter"`
    Project *int64 `queryParam:"style=form,explode=true,name=project"`
    
}

type GetTileV2LocationsTilesZXYPbfGetRequest struct {
    PathParams GetTileV2LocationsTilesZXYPbfGetPathParams 
    QueryParams GetTileV2LocationsTilesZXYPbfGetQueryParams 
    
}

type GetTileV2LocationsTilesZXYPbfGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

