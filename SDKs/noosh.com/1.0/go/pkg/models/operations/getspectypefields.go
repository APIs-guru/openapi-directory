package operations

type GetSpecTypeFieldsPathParams struct {
	SpecTypeID  string `pathParam:"style=simple,explode=false,name=spec_type_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSpecTypeFieldsRequest struct {
	PathParams GetSpecTypeFieldsPathParams
}

type GetSpecTypeFieldsResponse struct {
	Body                 []byte
	ContentType          string
	HTTPStatusVo         *interface{}
	SpecTypeFieldsListVo *interface{}
	StatusCode           int64
}
