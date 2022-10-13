package shared

type GoogleCloudDatacatalogV1SearchCatalogRequestScope struct {
	IncludeGcpPublicDatasets  *bool    `json:"includeGcpPublicDatasets"`
	IncludeOrgIds             []string `json:"includeOrgIds"`
	IncludeProjectIds         []string `json:"includeProjectIds"`
	IncludePublicTagTemplates *bool    `json:"includePublicTagTemplates"`
	RestrictedLocations       []string `json:"restrictedLocations"`
	StarredOnly               *bool    `json:"starredOnly"`
}
