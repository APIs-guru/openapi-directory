package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesPathParams struct {
	EndDate   time.Time `pathParam:"style=simple,explode=false,name=endDate"`
	ServiceID string    `pathParam:"style=simple,explode=false,name=serviceId"`
	StartDate time.Time `pathParam:"style=simple,explode=false,name=startDate"`
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesQueryParams struct {
	DayAvailability          *int32     `queryParam:"style=form,explode=true,name=dayAvailability"`
	DayAvailabilityStartDate *time.Time `queryParam:"style=form,explode=true,name=dayAvailabilityStartDate"`
	Destination              *string    `queryParam:"style=form,explode=true,name=destination"`
	Duration                 *int32     `queryParam:"style=form,explode=true,name=duration"`
	EndTime                  *int32     `queryParam:"style=form,explode=true,name=endTime"`
	FirstDayAvailable        *bool      `queryParam:"style=form,explode=true,name=firstDayAvailable"`
	Interval                 *int32     `queryParam:"style=form,explode=true,name=interval"`
	LocationID               *string    `queryParam:"style=form,explode=true,name=locationId"`
	ResourceGroupID          *string    `queryParam:"style=form,explode=true,name=resourceGroupId"`
	ResourceID               *string    `queryParam:"style=form,explode=true,name=resourceId"`
	ResourceIds              *string    `queryParam:"style=form,explode=true,name=resourceIds"`
	RoundRobin               *string    `queryParam:"style=form,explode=true,name=roundRobin"`
	StartTime                *int32     `queryParam:"style=form,explode=true,name=startTime"`
	TzOffset                 *int32     `queryParam:"style=form,explode=true,name=tzOffset"`
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesRequest struct {
	PathParams  GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesPathParams
	QueryParams GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesQueryParams
}

type GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse struct {
	Availability3ViewModel *shared.Availability3ViewModel
	ContentType            string
	StatusCode             int64
}
