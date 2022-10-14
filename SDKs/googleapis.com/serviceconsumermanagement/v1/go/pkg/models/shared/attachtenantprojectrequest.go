package shared

type AttachTenantProjectRequest struct {
	ExternalResource *string `json:"externalResource,omitempty"`
	ReservedResource *string `json:"reservedResource,omitempty"`
	Tag              *string `json:"tag,omitempty"`
}
