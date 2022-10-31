package operations

type PostEstimatePathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostEstimateRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	EstimatePo       *interface{} `request:"mediaType=application/json"`
	EstimatePo1      *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostEstimateRequest struct {
	PathParams PostEstimatePathParams
	Request    *PostEstimateRequests
}

type PostEstimateResponse struct {
	Body         []byte
	ContentType  string
	EstimatePo   *interface{}
	HTTPStatusVo *interface{}
	StatusCode   int64
}
