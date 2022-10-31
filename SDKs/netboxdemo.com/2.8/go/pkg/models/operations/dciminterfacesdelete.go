package operations

type DcimInterfacesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfacesDeleteRequest struct {
	PathParams DcimInterfacesDeletePathParams
}

type DcimInterfacesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
