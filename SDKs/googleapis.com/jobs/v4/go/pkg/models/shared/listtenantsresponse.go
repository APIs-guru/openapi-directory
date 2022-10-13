package shared

type ListTenantsResponse struct {
	Metadata      *ResponseMetadata `json:"metadata"`
	NextPageToken *string           `json:"nextPageToken"`
	Tenants       []Tenant          `json:"tenants"`
}
