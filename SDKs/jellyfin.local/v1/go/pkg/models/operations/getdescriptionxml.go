package operations



type GetDescriptionXMLPathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetDescriptionXMLRequest struct {
    PathParams GetDescriptionXMLPathParams 
    
}

type GetDescriptionXMLResponse struct {
    ContentType string 
    GetDescriptionXML200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

