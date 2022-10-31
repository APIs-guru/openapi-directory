package operations

type PreprintProviderLicensesListPathParams struct {
	PreprintProviderID string `pathParam:"style=simple,explode=false,name=preprint_provider_id"`
}

type PreprintProviderLicensesListRequest struct {
	PathParams PreprintProviderLicensesListPathParams
}

type PreprintProviderLicensesListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
