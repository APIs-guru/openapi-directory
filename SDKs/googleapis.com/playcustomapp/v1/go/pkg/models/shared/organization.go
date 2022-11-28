package shared

// Organization
// Represents an organization that can access a custom app.
type Organization struct {
	OrganizationID   *string `json:"organizationId,omitempty"`
	OrganizationName *string `json:"organizationName,omitempty"`
}
