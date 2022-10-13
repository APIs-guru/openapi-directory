package operations

type GetEstimateListPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetEstimateListRequest struct {
	PathParams GetEstimateListPathParams
}

type GetEstimateListResponse struct {
	Body                 []byte
	ContentType          string
	EstimateListExpandVo *interface{}
	HTTPStatusVo         *interface{}
	StatusCode           int64
}
