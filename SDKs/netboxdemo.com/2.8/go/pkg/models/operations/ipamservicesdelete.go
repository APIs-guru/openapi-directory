package operations

type IpamServicesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamServicesDeleteRequest struct {
	PathParams IpamServicesDeletePathParams
}

type IpamServicesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
