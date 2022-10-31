package operations

type GetContactUserInfoPathParams struct {
	UserID      string `pathParam:"style=simple,explode=false,name=user_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetContactUserInfoRequest struct {
	PathParams GetContactUserInfoPathParams
}

type GetContactUserInfoResponse struct {
	Body                []byte
	ContentType         string
	HTTPStatusVo        *interface{}
	StatusCode          int64
	UserDetailsExpandVo *interface{}
}
