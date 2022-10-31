package shared

type BusinessServiceViewModel struct {
	ID          *int32  `json:"id,omitempty"`
	ObjectName  *string `json:"objectName,omitempty"`
	ServiceID   *int32  `json:"serviceId,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}
