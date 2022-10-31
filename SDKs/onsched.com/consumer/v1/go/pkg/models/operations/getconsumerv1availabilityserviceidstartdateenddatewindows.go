package operations

import (
"time"
"openapi/pkg/models/shared")

type GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams struct {
    EndDate time.Time `pathParam:"style=simple,explode=false,name=endDate"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    StartDate time.Time `pathParam:"style=simple,explode=false,name=startDate"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams struct {
    Destination *string `queryParam:"style=form,explode=true,name=destination"`
    Duration *int32 `queryParam:"style=form,explode=true,name=duration"`
    Interval *int32 `queryParam:"style=form,explode=true,name=interval"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    ResourceGroupID *string `queryParam:"style=form,explode=true,name=resourceGroupId"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    ResourceIds *string `queryParam:"style=form,explode=true,name=resourceIds"`
    RoundRobin *string `queryParam:"style=form,explode=true,name=roundRobin"`
    TzOffset *int32 `queryParam:"style=form,explode=true,name=tzOffset"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest struct {
    PathParams GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsPathParams 
    QueryParams GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsQueryParams 
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse struct {
    ContentType string 
    StatusCode int64 
    WindowAvailabilityViewModel *shared.WindowAvailabilityViewModel 
    
}

