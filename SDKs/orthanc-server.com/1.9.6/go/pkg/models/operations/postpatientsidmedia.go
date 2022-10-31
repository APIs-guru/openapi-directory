package operations



type PostPatientsIDMediaPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostPatientsIDMediaRequest struct {
    PathParams PostPatientsIDMediaPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostPatientsIDMediaResponse struct {
    Body []byte 
    ContentType string 
    PostPatientsIDMedia200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

