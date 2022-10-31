package operations



type ConvertURLQueryParams struct {
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type ConvertURLRequest struct {
    QueryParams ConvertURLQueryParams 
    
}

type ConvertURLResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    ConvertURL200ApplicationJSONAny *interface{} 
    
}

