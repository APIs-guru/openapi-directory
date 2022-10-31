package operations

type GetTaskOfProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	TaskID      string `pathParam:"style=simple,explode=false,name=task_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTaskOfProjectRequest struct {
	PathParams GetTaskOfProjectPathParams
}

type GetTaskOfProjectResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	StatusCode   int64
	TaskExpandVo *interface{}
}
