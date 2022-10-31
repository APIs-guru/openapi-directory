package operations



type DcimDeviceBayTemplatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimDeviceBayTemplatesDeleteRequest struct {
    PathParams DcimDeviceBayTemplatesDeletePathParams 
    
}

type DcimDeviceBayTemplatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

