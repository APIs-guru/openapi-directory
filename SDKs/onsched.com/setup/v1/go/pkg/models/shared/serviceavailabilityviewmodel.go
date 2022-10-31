package shared



type ServiceAvailabilityViewModel struct {
    IgnoreBusinessHours *bool `json:"ignoreBusinessHours,omitempty"`
    ServiceID *int32 `json:"serviceId,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

