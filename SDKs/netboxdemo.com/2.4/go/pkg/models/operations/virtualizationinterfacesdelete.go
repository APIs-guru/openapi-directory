package operations

type VirtualizationInterfacesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationInterfacesDeleteRequest struct {
	PathParams VirtualizationInterfacesDeletePathParams
}

type VirtualizationInterfacesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
