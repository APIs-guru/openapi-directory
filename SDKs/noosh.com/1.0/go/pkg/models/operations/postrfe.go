package operations

type PostRfePathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostRfeRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	RfePo            *interface{} `request:"mediaType=application/json"`
	RfePo1           *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostRfeRequest struct {
	PathParams PostRfePathParams
	Request    *PostRfeRequests
}

type PostRfeResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	RfqVo        *interface{}
	StatusCode   int64
}
