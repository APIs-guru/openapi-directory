package operations



type GetSwaggerDocNameFormatPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetSwaggerDocNameFormatRequest struct {
    PathParams GetSwaggerDocNameFormatPathParams 
    
}

type GetSwaggerDocNameFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

