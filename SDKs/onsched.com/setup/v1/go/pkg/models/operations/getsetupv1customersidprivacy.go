package operations

type GetSetupV1CustomersIDPrivacyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1CustomersIDPrivacyRequest struct {
	PathParams GetSetupV1CustomersIDPrivacyPathParams
}

type GetSetupV1CustomersIDPrivacyResponse struct {
	ContentType              string
	CustomerPrivacyViewModel map[string]interface{}
	StatusCode               int64
}
