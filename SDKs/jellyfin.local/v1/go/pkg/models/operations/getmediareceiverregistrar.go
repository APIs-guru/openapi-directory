package operations



type GetMediaReceiverRegistrarPathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetMediaReceiverRegistrarRequest struct {
    PathParams GetMediaReceiverRegistrarPathParams 
    
}

type GetMediaReceiverRegistrarResponse struct {
    ContentType string 
    GetMediaReceiverRegistrar200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

