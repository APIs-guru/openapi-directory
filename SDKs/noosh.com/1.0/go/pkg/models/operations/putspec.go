package operations

type PutSpecPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	SpecID      string `pathParam:"style=simple,explode=false,name=spec_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PutSpecRequests struct {
	ApplicationXML      []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml    []byte       `request:"mediaType=application/x-yaml"`
	TextCsv             []byte       `request:"mediaType=text/csv"`
	TextXML             []byte       `request:"mediaType=text/xml"`
	TextXYaml           []byte       `request:"mediaType=text/x-yaml"`
	V1X1SpecUpdatingPo  *interface{} `request:"mediaType=application/json"`
	V1X1SpecUpdatingPo1 *interface{} `request:"mediaType=application/x-json-smile"`
}

type PutSpecRequest struct {
	PathParams PutSpecPathParams
	Request    *PutSpecRequests
}

type PutSpecResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	SpecHTTPStatusVo *interface{}
	StatusCode       int64
}
