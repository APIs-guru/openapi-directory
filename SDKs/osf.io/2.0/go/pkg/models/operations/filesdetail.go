package operations



type FilesDetailPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type FilesDetailRequest struct {
    PathParams FilesDetailPathParams 
    
}

type FilesDetailResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

