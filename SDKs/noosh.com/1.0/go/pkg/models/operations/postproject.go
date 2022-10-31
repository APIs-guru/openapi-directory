package operations

type PostProjectPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostProjectRequests struct {
	ApplicationXML    []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml  []byte       `request:"mediaType=application/x-yaml"`
	ProjectPersistVo  *interface{} `request:"mediaType=application/json"`
	ProjectPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv           []byte       `request:"mediaType=text/csv"`
	TextXML           []byte       `request:"mediaType=text/xml"`
	TextXYaml         []byte       `request:"mediaType=text/x-yaml"`
}

type PostProjectRequest struct {
	PathParams PostProjectPathParams
	Request    *PostProjectRequests
}

type PostProjectResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	ProjectVo    *interface{}
	StatusCode   int64
}
