package operations

type IpamIPAddressesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamIPAddressesDeleteRequest struct {
	PathParams IpamIPAddressesDeletePathParams
}

type IpamIPAddressesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
