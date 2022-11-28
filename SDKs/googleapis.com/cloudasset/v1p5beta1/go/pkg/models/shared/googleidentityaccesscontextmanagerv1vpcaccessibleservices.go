package shared

// GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices
// Specifies how APIs are allowed to communicate within the Service Perimeter.
type GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices struct {
	AllowedServices   []string `json:"allowedServices,omitempty"`
	EnableRestriction *bool    `json:"enableRestriction,omitempty"`
}
