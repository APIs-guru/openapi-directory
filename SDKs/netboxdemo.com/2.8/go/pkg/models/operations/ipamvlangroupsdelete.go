package operations

type IpamVlanGroupsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamVlanGroupsDeleteRequest struct {
	PathParams IpamVlanGroupsDeletePathParams
}

type IpamVlanGroupsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
