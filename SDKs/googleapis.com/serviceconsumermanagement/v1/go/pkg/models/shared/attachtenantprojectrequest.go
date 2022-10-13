package shared

type AttachTenantProjectRequest struct {
	ExternalResource *string `json:"externalResource"`
	ReservedResource *string `json:"reservedResource"`
	Tag              *string `json:"tag"`
}
