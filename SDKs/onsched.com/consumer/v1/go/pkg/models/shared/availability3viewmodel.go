package shared

type Availability3ViewModel struct {
	BusinessName        *string `json:"businessName"`
	FirstAvailableDate  *string `json:"firstAvailableDate"`
	ObjectName          *string `json:"objectName"`
	ResourceDescription *string `json:"resourceDescription"`
	ResourceID          *string `json:"resourceId"`
	ResourceIds         *string `json:"resourceIds"`
	ResourceName        *string `json:"resourceName"`
	ServiceDescription  *string `json:"serviceDescription"`
	ServiceDuration     *int32  `json:"serviceDuration"`
	ServiceID           *string `json:"serviceId"`
	ServiceName         *string `json:"serviceName"`
	TzRequested         *int32  `json:"tzRequested"`
}
