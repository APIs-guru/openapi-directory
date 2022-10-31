package operations



type SmsConversionQueryParams struct {
    Delivered interface{} `queryParam:"style=form,explode=true,name=delivered"`
    MessageID string `queryParam:"style=form,explode=true,name=message-id"`
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type SmsConversionRequest struct {
    QueryParams SmsConversionQueryParams 
    
}

type SmsConversionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

