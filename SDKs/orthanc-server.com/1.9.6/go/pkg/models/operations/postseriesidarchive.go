package operations



type PostSeriesIDArchivePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSeriesIDArchiveRequest struct {
    PathParams PostSeriesIDArchivePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostSeriesIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    PostSeriesIDArchive200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

