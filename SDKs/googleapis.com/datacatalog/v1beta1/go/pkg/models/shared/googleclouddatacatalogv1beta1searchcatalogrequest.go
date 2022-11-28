package shared

// GoogleCloudDatacatalogV1beta1SearchCatalogRequest
// Request message for SearchCatalog.
type GoogleCloudDatacatalogV1beta1SearchCatalogRequest struct {
	OrderBy   *string                                                 `json:"orderBy,omitempty"`
	PageSize  *int32                                                  `json:"pageSize,omitempty"`
	PageToken *string                                                 `json:"pageToken,omitempty"`
	Query     *string                                                 `json:"query,omitempty"`
	Scope     *GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope `json:"scope,omitempty"`
}
