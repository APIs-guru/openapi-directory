package operations

type ProductsAPISaveRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type ProductsAPISaveResponse struct {
	ContentType                            string
	ProductsAPISave201ApplicationJSONOneOf *interface{}
	StatusCode                             int64
}
