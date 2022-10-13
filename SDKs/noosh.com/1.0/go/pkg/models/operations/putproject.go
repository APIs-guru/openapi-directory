package operations

type PutProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PutProjectRequests struct {
	ApplicationXML    []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml  []byte       `request:"mediaType=application/x-yaml"`
	ProjectPersistVo  *interface{} `request:"mediaType=application/json"`
	ProjectPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv           []byte       `request:"mediaType=text/csv"`
	TextXML           []byte       `request:"mediaType=text/xml"`
	TextXYaml         []byte       `request:"mediaType=text/x-yaml"`
}

type PutProjectRequest struct {
	PathParams PutProjectPathParams
	Request    *PutProjectRequests
}

type PutProjectResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	StatusCode   int64
}
