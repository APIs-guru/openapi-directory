package operations

type GetSpecPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	SpecID      string `pathParam:"style=simple,explode=false,name=spec_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSpecRequest struct {
	PathParams GetSpecPathParams
}

type GetSpecResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	StatusCode       int64
	V1x1SpecExpandVo *interface{}
}
