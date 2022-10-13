package shared

type AvailabilityDayViewModel struct {
	ObjectName          *string `json:"objectName"`
	ResourceDescription *string `json:"resourceDescription"`
	ResourceID          *string `json:"resourceId"`
	ResourceName        *string `json:"resourceName"`
	ServiceDescription  *string `json:"serviceDescription"`
	ServiceID           *string `json:"serviceId"`
	ServiceName         *string `json:"serviceName"`
	TzRequested         *int32  `json:"tzRequested"`
}
