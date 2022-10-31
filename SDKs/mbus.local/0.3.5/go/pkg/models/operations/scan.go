package operations



type ScanPathParams struct {
    Baudrate int32 `pathParam:"style=simple,explode=false,name=baudrate"`
    Device string `pathParam:"style=simple,explode=false,name=device"`
    
}

type ScanRequest struct {
    PathParams ScanPathParams 
    
}

type ScanResponse struct {
    ContentType string 
    StatusCode int64 
    Slaves *string 
    TextError *string 
    
}

