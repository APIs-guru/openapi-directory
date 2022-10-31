package operations



type PostPatientsIDModifyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostPatientsIDModifyRequest struct {
    PathParams PostPatientsIDModifyPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostPatientsIDModifyResponse struct {
    ContentType string 
    PostPatientsIDModify200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

