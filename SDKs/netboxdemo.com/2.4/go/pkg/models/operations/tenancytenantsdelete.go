package operations

type TenancyTenantsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantsDeleteRequest struct {
	PathParams TenancyTenantsDeletePathParams
}

type TenancyTenantsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
