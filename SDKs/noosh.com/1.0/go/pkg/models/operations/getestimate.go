package operations

type GetEstimatePathParams struct {
	EstimateID  string `pathParam:"style=simple,explode=false,name=estimate_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetEstimateRequest struct {
	PathParams GetEstimatePathParams
}

type GetEstimateResponse struct {
	Body             []byte
	ContentType      string
	EstimateExpandVo *interface{}
	HTTPStatusVo     *interface{}
	StatusCode       int64
}
