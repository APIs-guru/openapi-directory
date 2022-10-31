package operations



type GetContentDirectory3PathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetContentDirectory3Request struct {
    PathParams GetContentDirectory3PathParams 
    
}

type GetContentDirectory3Response struct {
    ContentType string 
    GetContentDirectory3200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

