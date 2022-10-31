package operations



type ProcessContentDirectoryControlRequestPathParams struct {
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type ProcessContentDirectoryControlRequestRequest struct {
    PathParams ProcessContentDirectoryControlRequestPathParams 
    
}

type ProcessContentDirectoryControlRequestResponse struct {
    ContentType string 
    ProcessContentDirectoryControlRequest200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

