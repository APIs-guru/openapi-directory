package shared

// AttachTenantProjectRequest
// Request to attach an existing project to the tenancy unit as a new tenant resource.
type AttachTenantProjectRequest struct {
	ExternalResource *string `json:"externalResource,omitempty"`
	ReservedResource *string `json:"reservedResource,omitempty"`
	Tag              *string `json:"tag,omitempty"`
}
