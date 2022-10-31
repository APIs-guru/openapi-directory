package operations



type TenancyChoicesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type TenancyChoicesReadRequest struct {
    PathParams TenancyChoicesReadPathParams 
    
}

type TenancyChoicesReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

