package operations

type ProductsAPIPatchProductRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type ProductsAPIPatchProductResponse struct {
	ContentType string
	StatusCode  int64
}
