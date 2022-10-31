package operations



type PostPatientsIDAttachmentsNameVerifyMd5PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostPatientsIDAttachmentsNameVerifyMd5Request struct {
    PathParams PostPatientsIDAttachmentsNameVerifyMd5PathParams 
    
}

type PostPatientsIDAttachmentsNameVerifyMd5Response struct {
    ContentType string 
    PostPatientsIDAttachmentsNameVerifyMd5200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

