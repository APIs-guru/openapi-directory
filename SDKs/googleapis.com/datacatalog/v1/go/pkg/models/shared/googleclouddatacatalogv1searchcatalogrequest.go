package shared



type GoogleCloudDatacatalogV1SearchCatalogRequest struct {
    OrderBy *string `json:"orderBy,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    Query *string `json:"query,omitempty"`
    Scope *GoogleCloudDatacatalogV1SearchCatalogRequestScope `json:"scope,omitempty"`
    
}

