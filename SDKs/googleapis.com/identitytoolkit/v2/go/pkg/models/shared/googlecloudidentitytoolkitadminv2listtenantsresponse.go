package shared

// GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
// Response message for ListTenants.
type GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
	Tenants       []GoogleCloudIdentitytoolkitAdminV2Tenant `json:"tenants,omitempty"`
}
