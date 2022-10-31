package operations



type GetSeriesIDAttachmentsNameMd5PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetSeriesIDAttachmentsNameMd5Headers struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetSeriesIDAttachmentsNameMd5Request struct {
    PathParams GetSeriesIDAttachmentsNameMd5PathParams 
    Headers GetSeriesIDAttachmentsNameMd5Headers 
    
}

type GetSeriesIDAttachmentsNameMd5Response struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

