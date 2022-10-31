package operations



type GetPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    Baudrate int32 `pathParam:"style=simple,explode=false,name=baudrate"`
    Device string `pathParam:"style=simple,explode=false,name=device"`
    
}

type GetRequest struct {
    PathParams GetPathParams 
    
}

type GetResponse struct {
    ContentType string 
    StatusCode int64 
    MbusData *string 
    TextError *string 
    
}

