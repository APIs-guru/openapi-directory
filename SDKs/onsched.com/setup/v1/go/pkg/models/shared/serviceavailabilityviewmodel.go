package shared

type ServiceAvailabilityViewModel struct {
	IgnoreBusinessHours *bool   `json:"ignoreBusinessHours"`
	ServiceID           *int32  `json:"serviceId"`
	ServiceName         *string `json:"serviceName"`
}
