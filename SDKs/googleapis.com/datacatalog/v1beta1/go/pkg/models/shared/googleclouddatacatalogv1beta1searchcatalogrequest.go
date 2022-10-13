package shared

type GoogleCloudDatacatalogV1beta1SearchCatalogRequest struct {
	OrderBy   *string                                                 `json:"orderBy"`
	PageSize  *int32                                                  `json:"pageSize"`
	PageToken *string                                                 `json:"pageToken"`
	Query     *string                                                 `json:"query"`
	Scope     *GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope `json:"scope"`
}
