package operations



type GetFilePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=file_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetFileRequest struct {
    PathParams GetFilePathParams 
    
}

type GetFileResponse struct {
    Body []byte 
    ContentType string 
    FileResponseVo *interface{} 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

