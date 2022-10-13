package operations

type PreprintProviderTaxonomiesListPathParams struct {
	PreprintProviderID string `pathParam:"style=simple,explode=false,name=preprint_provider_id"`
}

type PreprintProviderTaxonomiesListRequest struct {
	PathParams PreprintProviderTaxonomiesListPathParams
}

type PreprintProviderTaxonomiesListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
