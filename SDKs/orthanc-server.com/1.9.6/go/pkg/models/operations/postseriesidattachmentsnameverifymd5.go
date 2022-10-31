package operations



type PostSeriesIDAttachmentsNameVerifyMd5PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostSeriesIDAttachmentsNameVerifyMd5Request struct {
    PathParams PostSeriesIDAttachmentsNameVerifyMd5PathParams 
    
}

type PostSeriesIDAttachmentsNameVerifyMd5Response struct {
    ContentType string 
    PostSeriesIDAttachmentsNameVerifyMd5200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

