package operations



type UploadProfileImagePathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type UploadProfileImageRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    Wildcard []byte `request:"mediaType=*/*"`
    BinaryString []byte `request:"mediaType=application/json"`
    BinaryString1 []byte `request:"mediaType=application/x-json-smile"`
    
}

type UploadProfileImageRequest struct {
    PathParams UploadProfileImagePathParams 
    Request *UploadProfileImageRequests 
    
}

type UploadProfileImageResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ProfileImageVo *interface{} 
    StatusCode int64 
    
}

