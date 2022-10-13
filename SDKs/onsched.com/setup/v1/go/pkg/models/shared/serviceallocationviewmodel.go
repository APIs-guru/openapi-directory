package shared

type ServiceAllocationViewModel struct {
	BookingCount        *int32           `json:"bookingCount"`
	BookingLimit        *int32           `json:"bookingLimit"`
	EndDate             *string          `json:"endDate"`
	EndTime             *int32           `json:"endTime"`
	ID                  *string          `json:"id"`
	LocationID          *string          `json:"locationId"`
	ObjectName          *string          `json:"objectName"`
	Reason              *string          `json:"reason"`
	Repeat              *RepeatViewModel `json:"repeat"`
	Repeats             *bool            `json:"repeats"`
	ResourceDescription *string          `json:"resourceDescription"`
	ResourceID          *string          `json:"resourceId"`
	ResourceImageURL    *string          `json:"resourceImageUrl"`
	ResourceName        *string          `json:"resourceName"`
	ServiceDescription  *string          `json:"serviceDescription"`
	ServiceDuration     *int32           `json:"serviceDuration"`
	ServiceID           *string          `json:"serviceId"`
	ServiceImageURL     *string          `json:"serviceImageUrl"`
	ServiceName         *string          `json:"serviceName"`
	StartDate           *string          `json:"startDate"`
	StartTime           *int32           `json:"startTime"`
	TimezoneName        *string          `json:"timezoneName"`
	TimezoneOffset      *int32           `json:"timezoneOffset"`
}
