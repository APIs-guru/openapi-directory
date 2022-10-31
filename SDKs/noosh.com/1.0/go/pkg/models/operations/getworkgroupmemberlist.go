package operations

type GetWorkgroupMemberListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetWorkgroupMemberListRequest struct {
	PathParams GetWorkgroupMemberListPathParams
}

type GetWorkgroupMemberListResponse struct {
	Body                   []byte
	ContentType            string
	HTTPStatusVo           *interface{}
	StatusCode             int64
	WorkgroupMembersListVo *interface{}
}
