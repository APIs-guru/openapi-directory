package operations



type ProductsAPIFindQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type ProductsAPIFindRequest struct {
    QueryParams ProductsAPIFindQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type ProductsAPIFindResponse struct {
    ContentType string 
    ProductsAPIFind200ApplicationJSONOneOf *interface{} 
    StatusCode int64 
    
}

