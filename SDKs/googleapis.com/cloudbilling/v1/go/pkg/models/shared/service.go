package shared

// Service
// Encapsulates a single service in Google Cloud Platform.
type Service struct {
	BusinessEntityName *string `json:"businessEntityName,omitempty"`
	DisplayName        *string `json:"displayName,omitempty"`
	Name               *string `json:"name,omitempty"`
	ServiceID          *string `json:"serviceId,omitempty"`
}
