package operations

type DcimSitesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimSitesDeleteRequest struct {
	PathParams DcimSitesDeletePathParams
}

type DcimSitesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
