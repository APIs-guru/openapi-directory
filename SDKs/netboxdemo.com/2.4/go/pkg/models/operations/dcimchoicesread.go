package operations

type DcimChoicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DcimChoicesReadRequest struct {
	PathParams DcimChoicesReadPathParams
}

type DcimChoicesReadResponse struct {
	ContentType string
	StatusCode  int64
}
