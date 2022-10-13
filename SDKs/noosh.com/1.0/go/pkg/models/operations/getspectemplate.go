package operations

type GetSpecTemplatePathParams struct {
	SpecTemplateID string `pathParam:"style=simple,explode=false,name=spec_template_id"`
	WorkgroupID    string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSpecTemplateRequest struct {
	PathParams GetSpecTemplatePathParams
}

type GetSpecTemplateResponse struct {
	Body                 []byte
	ContentType          string
	HTTPStatusVo         *interface{}
	SpecTemplateExpandVo *interface{}
	StatusCode           int64
}
