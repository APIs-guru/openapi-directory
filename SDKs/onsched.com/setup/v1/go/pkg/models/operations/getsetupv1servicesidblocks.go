package operations

import (
"time")

type GetSetupV1ServicesIDBlocksPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ServicesIDBlocksQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=endDate"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
    
}

type GetSetupV1ServicesIDBlocksRequest struct {
    PathParams GetSetupV1ServicesIDBlocksPathParams 
    QueryParams GetSetupV1ServicesIDBlocksQueryParams 
    
}

type GetSetupV1ServicesIDBlocksResponse struct {
    ContentType string 
    ServiceBlockListViewModel map[string]interface{} 
    StatusCode int64 
    
}

