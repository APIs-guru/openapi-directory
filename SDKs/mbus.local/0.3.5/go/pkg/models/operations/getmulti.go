package operations



type GetMultiPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    Baudrate int32 `pathParam:"style=simple,explode=false,name=baudrate"`
    Device string `pathParam:"style=simple,explode=false,name=device"`
    Maxframes int32 `pathParam:"style=simple,explode=false,name=maxframes"`
    
}

type GetMultiRequest struct {
    PathParams GetMultiPathParams 
    
}

type GetMultiResponse struct {
    ContentType string 
    StatusCode int64 
    MbusData *string 
    TextError *string 
    
}

