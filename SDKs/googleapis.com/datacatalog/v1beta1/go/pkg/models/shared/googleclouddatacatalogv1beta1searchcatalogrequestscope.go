package shared

// GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope
// The criteria that select the subspace used for query matching.
type GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope struct {
	IncludeGcpPublicDatasets *bool    `json:"includeGcpPublicDatasets,omitempty"`
	IncludeOrgIds            []string `json:"includeOrgIds,omitempty"`
	IncludeProjectIds        []string `json:"includeProjectIds,omitempty"`
	RestrictedLocations      []string `json:"restrictedLocations,omitempty"`
}
