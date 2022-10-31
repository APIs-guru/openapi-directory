package operations



type PostPatientsIDAnonymizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostPatientsIDAnonymizeRequest struct {
    PathParams PostPatientsIDAnonymizePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostPatientsIDAnonymizeResponse struct {
    ContentType string 
    PostPatientsIDAnonymize200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

