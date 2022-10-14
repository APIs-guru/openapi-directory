package shared

type AvailabilityDayViewModel struct {
	ObjectName          *string `json:"objectName,omitempty"`
	ResourceDescription *string `json:"resourceDescription,omitempty"`
	ResourceID          *string `json:"resourceId,omitempty"`
	ResourceName        *string `json:"resourceName,omitempty"`
	ServiceDescription  *string `json:"serviceDescription,omitempty"`
	ServiceID           *string `json:"serviceId,omitempty"`
	ServiceName         *string `json:"serviceName,omitempty"`
	TzRequested         *int32  `json:"tzRequested,omitempty"`
}
