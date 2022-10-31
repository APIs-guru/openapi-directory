package operations

type GetSpecProductTypeListOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSpecProductTypeListOfWorkgroupRequest struct {
	PathParams GetSpecProductTypeListOfWorkgroupPathParams
}

type GetSpecProductTypeListOfWorkgroupResponse struct {
	Body                     []byte
	ContentType              string
	HTTPStatusVo             *interface{}
	StatusCode               int64
	WorkgroupAttributeListVo *interface{}
}
