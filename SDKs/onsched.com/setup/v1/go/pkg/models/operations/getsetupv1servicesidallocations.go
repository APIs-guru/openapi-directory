package operations

import (
"time")

type GetSetupV1ServicesIDAllocationsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ServicesIDAllocationsQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=endDate"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
    
}

type GetSetupV1ServicesIDAllocationsRequest struct {
    PathParams GetSetupV1ServicesIDAllocationsPathParams 
    QueryParams GetSetupV1ServicesIDAllocationsQueryParams 
    
}

type GetSetupV1ServicesIDAllocationsResponse struct {
    ContentType string 
    ServiceAllocationListViewModel map[string]interface{} 
    StatusCode int64 
    
}

