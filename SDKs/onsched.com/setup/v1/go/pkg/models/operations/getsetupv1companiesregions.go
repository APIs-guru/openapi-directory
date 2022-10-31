package operations

type GetSetupV1CompaniesRegionsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1CompaniesRegionsRequest struct {
	QueryParams GetSetupV1CompaniesRegionsQueryParams
}

type GetSetupV1CompaniesRegionsResponse struct {
	ContentType         string
	RegionListViewModel map[string]interface{}
	StatusCode          int64
}
