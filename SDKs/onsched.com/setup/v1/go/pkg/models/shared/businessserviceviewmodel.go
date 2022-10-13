package shared

type BusinessServiceViewModel struct {
	ID          *int32  `json:"id"`
	ObjectName  *string `json:"objectName"`
	ServiceID   *int32  `json:"serviceId"`
	ServiceName *string `json:"serviceName"`
}
