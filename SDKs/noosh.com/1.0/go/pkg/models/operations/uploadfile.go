package operations



type UploadFilePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type UploadFileRequestBody struct {
    Content []byte `multipartForm:"content"`
    RequestBody string `multipartForm:"name=requestBody"`
    
}

type UploadFileRequest struct {
    PathParams UploadFilePathParams 
    Request *UploadFileRequestBody `multipartForm:"file" request:"mediaType=multipart/form-data"`
    
}

type UploadFileResponse struct {
    Body []byte 
    ContentType string 
    FileResponseVo *interface{} 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

