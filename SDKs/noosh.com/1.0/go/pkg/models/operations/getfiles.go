package operations

type GetFilesPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetFilesRequest struct {
	PathParams GetFilesPathParams
}

type GetFilesResponse struct {
	Body           []byte
	ContentType    string
	FileResponseVo *interface{}
	HTTPStatusVo   *interface{}
	StatusCode     int64
}
