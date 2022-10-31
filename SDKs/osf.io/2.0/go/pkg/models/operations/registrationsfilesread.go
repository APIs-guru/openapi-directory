package operations



type RegistrationsFilesReadPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
    
}

type RegistrationsFilesReadRequest struct {
    PathParams RegistrationsFilesReadPathParams 
    
}

type RegistrationsFilesReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

