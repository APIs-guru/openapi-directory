package operations

type IpamChoicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type IpamChoicesReadRequest struct {
	PathParams IpamChoicesReadPathParams
}

type IpamChoicesReadResponse struct {
	ContentType string
	StatusCode  int64
}
