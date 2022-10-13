package operations

type TaskPriorityListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type TaskPriorityListRequest struct {
	PathParams TaskPriorityListPathParams
}

type TaskPriorityListResponse struct {
	Body               []byte
	ContentType        string
	HTTPStatusVo       *interface{}
	StatusCode         int64
	TaskPriorityListVo *interface{}
}
