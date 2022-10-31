package operations



type UploadBlobByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UploadBlobByIDRequest struct {
    PathParams UploadBlobByIDPathParams 
    Request *interface{} `request:"mediaType=multipart/form-data"`
    
}

type UploadBlobByIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

