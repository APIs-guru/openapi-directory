package operations

type GetMemberRolesPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	UserID      string `pathParam:"style=simple,explode=false,name=user_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetMemberRolesRequest struct {
	PathParams GetMemberRolesPathParams
}

type GetMemberRolesResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	RoleListVo   *interface{}
	StatusCode   int64
}
