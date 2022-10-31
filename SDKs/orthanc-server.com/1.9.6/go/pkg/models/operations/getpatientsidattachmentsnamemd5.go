package operations



type GetPatientsIDAttachmentsNameMd5PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetPatientsIDAttachmentsNameMd5Headers struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetPatientsIDAttachmentsNameMd5Request struct {
    PathParams GetPatientsIDAttachmentsNameMd5PathParams 
    Headers GetPatientsIDAttachmentsNameMd5Headers 
    
}

type GetPatientsIDAttachmentsNameMd5Response struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

