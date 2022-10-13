package shared

type GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope struct {
	IncludeGcpPublicDatasets *bool    `json:"includeGcpPublicDatasets"`
	IncludeOrgIds            []string `json:"includeOrgIds"`
	IncludeProjectIds        []string `json:"includeProjectIds"`
	RestrictedLocations      []string `json:"restrictedLocations"`
}
