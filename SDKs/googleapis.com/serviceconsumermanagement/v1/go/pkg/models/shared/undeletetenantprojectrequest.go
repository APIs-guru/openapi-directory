package shared

// UndeleteTenantProjectRequest
// Request message to undelete tenant project resource previously deleted from the tenancy unit.
type UndeleteTenantProjectRequest struct {
	Tag *string `json:"tag,omitempty"`
}
