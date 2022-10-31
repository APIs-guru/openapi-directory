package operations

import (
"time"
"openapi/pkg/models/shared")

type GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams struct {
    EndDate time.Time `pathParam:"style=simple,explode=false,name=endDate"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    StartDate time.Time `pathParam:"style=simple,explode=false,name=startDate"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams struct {
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    TzOffset *int32 `queryParam:"style=form,explode=true,name=tzOffset"`
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest struct {
    PathParams GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysPathParams 
    QueryParams GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysQueryParams 
    
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse struct {
    AvailabilityDayViewModel *shared.AvailabilityDayViewModel 
    ContentType string 
    StatusCode int64 
    
}

