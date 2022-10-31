package operations



type FilesPatchPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type FilesPatchRequest struct {
    PathParams FilesPatchPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type FilesPatchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

