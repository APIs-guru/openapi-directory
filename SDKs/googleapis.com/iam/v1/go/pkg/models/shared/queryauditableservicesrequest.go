package shared

// QueryAuditableServicesRequest
// A request to get the list of auditable services for a resource.
type QueryAuditableServicesRequest struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
}
