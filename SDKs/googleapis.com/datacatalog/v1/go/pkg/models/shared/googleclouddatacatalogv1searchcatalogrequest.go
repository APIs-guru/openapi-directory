package shared

type GoogleCloudDatacatalogV1SearchCatalogRequest struct {
	OrderBy   *string                                            `json:"orderBy"`
	PageSize  *int32                                             `json:"pageSize"`
	PageToken *string                                            `json:"pageToken"`
	Query     *string                                            `json:"query"`
	Scope     *GoogleCloudDatacatalogV1SearchCatalogRequestScope `json:"scope"`
}
