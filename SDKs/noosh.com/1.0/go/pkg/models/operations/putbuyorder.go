package operations

type PutBuyOrderPathParams struct {
	OrderID     string `pathParam:"style=simple,explode=false,name=order_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PutBuyOrderRequests struct {
	ApplicationXML     []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml   []byte       `request:"mediaType=application/x-yaml"`
	OrderUpdPersistVo  *interface{} `request:"mediaType=application/json"`
	OrderUpdPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv            []byte       `request:"mediaType=text/csv"`
	TextXML            []byte       `request:"mediaType=text/xml"`
	TextXYaml          []byte       `request:"mediaType=text/x-yaml"`
}

type PutBuyOrderRequest struct {
	PathParams PutBuyOrderPathParams
	Request    *PutBuyOrderRequests
}

type PutBuyOrderResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	OrderVo      *interface{}
	StatusCode   int64
}
