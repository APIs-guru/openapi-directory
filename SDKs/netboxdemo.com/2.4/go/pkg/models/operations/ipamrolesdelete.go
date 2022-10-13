package operations

type IpamRolesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamRolesDeleteRequest struct {
	PathParams IpamRolesDeletePathParams
}

type IpamRolesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
