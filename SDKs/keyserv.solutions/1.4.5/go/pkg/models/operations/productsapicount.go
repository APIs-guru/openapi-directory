package operations

type ProductsAPICountRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type ProductsAPICountResponse struct {
	ContentType                             string
	ProductsAPICount200ApplicationJSONOneOf *interface{}
	StatusCode                              int64
}
