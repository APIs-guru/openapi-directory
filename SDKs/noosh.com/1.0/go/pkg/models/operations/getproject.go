package operations

type GetProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetProjectRequest struct {
	PathParams GetProjectPathParams
}

type GetProjectResponse struct {
	Body            []byte
	ContentType     string
	HTTPStatusVo    *interface{}
	ProjectExpandVo *interface{}
	StatusCode      int64
}
