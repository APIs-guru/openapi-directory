package operations

type PostTaskForProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostTaskForProjectRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	TaskPersistVo    *interface{} `request:"mediaType=application/json"`
	TaskPersistVo1   *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostTaskForProjectRequest struct {
	PathParams PostTaskForProjectPathParams
	Request    *PostTaskForProjectRequests
}

type PostTaskForProjectResponse struct {
	Body          []byte
	ContentType   string
	HTTPStatusVo  *interface{}
	StatusCode    int64
	TaskCreatedVo *interface{}
}
