package shared

// QueryAuditableServicesResponse
// A response containing a list of auditable services for a resource.
type QueryAuditableServicesResponse struct {
	Services []AuditableService `json:"services,omitempty"`
}
