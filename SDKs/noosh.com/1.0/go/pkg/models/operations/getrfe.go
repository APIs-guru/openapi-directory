package operations

type GetRfePathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	RfeID       string `pathParam:"style=simple,explode=false,name=rfe_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetRfeRequest struct {
	PathParams GetRfePathParams
}

type GetRfeResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	RfeExpandVo  *interface{}
	StatusCode   int64
}
