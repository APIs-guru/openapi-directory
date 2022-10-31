package shared

type GoogleCloudDatacatalogV1SearchCatalogRequestScope struct {
	IncludeGcpPublicDatasets  *bool    `json:"includeGcpPublicDatasets,omitempty"`
	IncludeOrgIds             []string `json:"includeOrgIds,omitempty"`
	IncludeProjectIds         []string `json:"includeProjectIds,omitempty"`
	IncludePublicTagTemplates *bool    `json:"includePublicTagTemplates,omitempty"`
	RestrictedLocations       []string `json:"restrictedLocations,omitempty"`
	StarredOnly               *bool    `json:"starredOnly,omitempty"`
}
