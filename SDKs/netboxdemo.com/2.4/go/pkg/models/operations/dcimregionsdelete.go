package operations

type DcimRegionsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRegionsDeleteRequest struct {
	PathParams DcimRegionsDeletePathParams
}

type DcimRegionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
