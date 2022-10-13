package shared

type AvailabilityViewModel struct {
	BusinessName            *string `json:"businessName"`
	CalendarID              *string `json:"calendarId"`
	CalendarResourceGroupID *string `json:"calendarResourceGroupId"`
	EndDate                 *string `json:"endDate"`
	FirstAvailableDate      *string `json:"firstAvailableDate"`
	LocationID              *string `json:"locationId"`
	ObjectName              *string `json:"objectName"`
	ResourceDescription     *string `json:"resourceDescription"`
	ResourceID              *string `json:"resourceId"`
	ResourceIds             *string `json:"resourceIds"`
	ResourceName            *string `json:"resourceName"`
	ServiceDescription      *string `json:"serviceDescription"`
	ServiceDuration         *int32  `json:"serviceDuration"`
	ServiceID               *string `json:"serviceId"`
	ServiceName             *string `json:"serviceName"`
	StartDate               *string `json:"startDate"`
	TzRequested             *int32  `json:"tzRequested"`
}
