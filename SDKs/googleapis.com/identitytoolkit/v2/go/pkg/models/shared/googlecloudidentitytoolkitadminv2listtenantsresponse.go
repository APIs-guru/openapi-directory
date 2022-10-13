package shared

type GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken"`
	Tenants       []GoogleCloudIdentitytoolkitAdminV2Tenant `json:"tenants"`
}
