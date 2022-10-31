package operations



type GetDescriptionXML2PathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetDescriptionXML2Request struct {
    PathParams GetDescriptionXML2PathParams 
    
}

type GetDescriptionXML2Response struct {
    ContentType string 
    GetDescriptionXML2200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

