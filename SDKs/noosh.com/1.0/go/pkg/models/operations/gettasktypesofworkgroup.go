package operations

type GetTaskTypesOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTaskTypesOfWorkgroupRequest struct {
	PathParams GetTaskTypesOfWorkgroupPathParams
}

type GetTaskTypesOfWorkgroupResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVo   *interface{}
	StatusCode     int64
	TaskTypeListVo *interface{}
}
