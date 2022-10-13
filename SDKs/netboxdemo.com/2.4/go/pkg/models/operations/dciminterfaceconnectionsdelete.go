package operations

type DcimInterfaceConnectionsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceConnectionsDeleteRequest struct {
	PathParams DcimInterfaceConnectionsDeletePathParams
}

type DcimInterfaceConnectionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
