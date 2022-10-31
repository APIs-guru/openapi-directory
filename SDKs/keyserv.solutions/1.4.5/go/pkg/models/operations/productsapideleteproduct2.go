package operations



type ProductsAPIDeleteProduct2PathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type ProductsAPIDeleteProduct2Headers struct {
    XAPIKey string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type ProductsAPIDeleteProduct2Request struct {
    PathParams ProductsAPIDeleteProduct2PathParams 
    Headers ProductsAPIDeleteProduct2Headers 
    
}

type ProductsAPIDeleteProduct2Response struct {
    ContentType string 
    StatusCode int64 
    
}

