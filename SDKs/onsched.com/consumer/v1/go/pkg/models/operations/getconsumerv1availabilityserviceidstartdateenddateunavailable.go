package operations

import (
"time")

type GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams struct {
    EndDate time.Time `pathParam:"style=simple,explode=false,name=endDate"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    StartDate time.Time `pathParam:"style=simple,explode=false,name=startDate"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams struct {
    Duration *int32 `queryParam:"style=form,explode=true,name=duration"`
    FullServerBasedAvailability *bool `queryParam:"style=form,explode=true,name=fullServerBasedAvailability"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    TzOffset *int32 `queryParam:"style=form,explode=true,name=tzOffset"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest struct {
    PathParams GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailablePathParams 
    QueryParams GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableQueryParams 
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse struct {
    ContentType string 
    StatusCode int64 
    UnavailableTimeListViewModel map[string]interface{} 
    
}

