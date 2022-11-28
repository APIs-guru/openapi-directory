package shared

// ServiceType
// A message describing a service type that the business offers.
type ServiceType struct {
	DisplayName   *string `json:"displayName,omitempty"`
	ServiceTypeID *string `json:"serviceTypeId,omitempty"`
}
