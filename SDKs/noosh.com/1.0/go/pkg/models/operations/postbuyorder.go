package operations

type PostBuyOrderPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostBuyOrderRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	OrderPo          *interface{} `request:"mediaType=application/json"`
	OrderPo1         *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostBuyOrderRequest struct {
	PathParams PostBuyOrderPathParams
	Request    *PostBuyOrderRequests
}

type PostBuyOrderResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	OrderPo      *interface{}
	StatusCode   int64
}
