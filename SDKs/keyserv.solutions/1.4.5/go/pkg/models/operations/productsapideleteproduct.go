package operations

type ProductsAPIDeleteProductPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type ProductsAPIDeleteProductHeaders struct {
	XAPIKey string `header:"name=X-Api-Key"`
}

type ProductsAPIDeleteProductRequest struct {
	PathParams ProductsAPIDeleteProductPathParams
	Headers    ProductsAPIDeleteProductHeaders
}

type ProductsAPIDeleteProductResponse struct {
	ContentType string
	StatusCode  int64
}
