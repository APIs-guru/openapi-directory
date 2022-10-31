package operations

import (
"time"
"openapi/pkg/models/shared")

type GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams struct {
    EndDate time.Time `pathParam:"style=simple,explode=false,name=endDate"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    StartDate time.Time `pathParam:"style=simple,explode=false,name=startDate"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams struct {
    DayAvailability *int32 `queryParam:"style=form,explode=true,name=dayAvailability"`
    DayAvailabilityStartDate *time.Time `queryParam:"style=form,explode=true,name=dayAvailabilityStartDate"`
    Destination *string `queryParam:"style=form,explode=true,name=destination"`
    Duration *int32 `queryParam:"style=form,explode=true,name=duration"`
    EndTime *int32 `queryParam:"style=form,explode=true,name=endTime"`
    FirstDayAvailable *bool `queryParam:"style=form,explode=true,name=firstDayAvailable"`
    FullServerBasedAvailability *bool `queryParam:"style=form,explode=true,name=fullServerBasedAvailability"`
    Interval *int32 `queryParam:"style=form,explode=true,name=interval"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    ResourceGroupID *string `queryParam:"style=form,explode=true,name=resourceGroupId"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    ResourceIds *string `queryParam:"style=form,explode=true,name=resourceIds"`
    RoundRobin *string `queryParam:"style=form,explode=true,name=roundRobin"`
    StartTime *int32 `queryParam:"style=form,explode=true,name=startTime"`
    TzOffset *int32 `queryParam:"style=form,explode=true,name=tzOffset"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest struct {
    PathParams GetConsumerV1AvailabilityServiceIDStartDateEndDatePathParams 
    QueryParams GetConsumerV1AvailabilityServiceIDStartDateEndDateQueryParams 
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse struct {
    AvailabilityViewModel *shared.AvailabilityViewModel 
    ContentType string 
    StatusCode int64 
    
}

