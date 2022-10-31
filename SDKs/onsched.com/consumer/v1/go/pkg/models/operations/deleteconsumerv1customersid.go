package operations



type DeleteConsumerV1CustomersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteConsumerV1CustomersIDRequest struct {
    PathParams DeleteConsumerV1CustomersIDPathParams 
    
}

type DeleteConsumerV1CustomersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

