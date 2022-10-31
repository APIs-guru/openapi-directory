package operations



type KeysAPICustomPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type KeysAPICustomRequest struct {
    PathParams KeysAPICustomPathParams 
    
}

type KeysAPICustomResponse struct {
    ContentType string 
    KeysAPICustom200ApplicationOctetStreamBinaryString []byte 
    StatusCode int64 
    
}

