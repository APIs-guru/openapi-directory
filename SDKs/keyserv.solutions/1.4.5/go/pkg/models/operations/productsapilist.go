package operations

import (
"openapi/pkg/models/shared")

type ProductsAPIListQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type ProductsAPIListRequest struct {
    QueryParams ProductsAPIListQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type ProductsAPIListResponse struct {
    ContentType string 
    ProductViews []shared.ProductView 
    StatusCode int64 
    
}

