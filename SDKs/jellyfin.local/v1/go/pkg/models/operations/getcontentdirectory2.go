package operations



type GetContentDirectory2PathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetContentDirectory2Request struct {
    PathParams GetContentDirectory2PathParams 
    
}

type GetContentDirectory2Response struct {
    ContentType string 
    GetContentDirectory2200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

