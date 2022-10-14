package shared

type Availability3ViewModel struct {
	BusinessName        *string `json:"businessName,omitempty"`
	FirstAvailableDate  *string `json:"firstAvailableDate,omitempty"`
	ObjectName          *string `json:"objectName,omitempty"`
	ResourceDescription *string `json:"resourceDescription,omitempty"`
	ResourceID          *string `json:"resourceId,omitempty"`
	ResourceIds         *string `json:"resourceIds,omitempty"`
	ResourceName        *string `json:"resourceName,omitempty"`
	ServiceDescription  *string `json:"serviceDescription,omitempty"`
	ServiceDuration     *int32  `json:"serviceDuration,omitempty"`
	ServiceID           *string `json:"serviceId,omitempty"`
	ServiceName         *string `json:"serviceName,omitempty"`
	TzRequested         *int32  `json:"tzRequested,omitempty"`
}
