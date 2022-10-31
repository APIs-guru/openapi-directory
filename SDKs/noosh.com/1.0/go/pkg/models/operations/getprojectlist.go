package operations

type GetProjectListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetProjectListRequest struct {
	PathParams GetProjectListPathParams
}

type GetProjectListResponse struct {
	Body          []byte
	ContentType   string
	HTTPStatusVo  *interface{}
	ProjectListVo *interface{}
	StatusCode    int64
}
