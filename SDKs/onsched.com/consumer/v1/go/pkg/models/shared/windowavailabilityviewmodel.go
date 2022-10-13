package shared

type WindowAvailabilityViewModel struct {
	BusinessName        *string `json:"businessName"`
	ObjectName          *string `json:"objectName"`
	ResourceDescription *string `json:"resourceDescription"`
	ResourceID          *string `json:"resourceId"`
	ResourceName        *string `json:"resourceName"`
	ServiceDescription  *string `json:"serviceDescription"`
	ServiceDuration     *int32  `json:"serviceDuration"`
	ServiceID           *string `json:"serviceId"`
	ServiceName         *string `json:"serviceName"`
	TzRequested         *int32  `json:"tzRequested"`
}
