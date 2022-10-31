package operations



type PostStudiesIDArchivePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostStudiesIDArchiveRequest struct {
    PathParams PostStudiesIDArchivePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostStudiesIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    PostStudiesIDArchive200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

