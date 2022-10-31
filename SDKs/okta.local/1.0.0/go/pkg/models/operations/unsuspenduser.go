package operations



type UnsuspendUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UnsuspendUserRequest struct {
    PathParams UnsuspendUserPathParams 
    Request []byte `request:"mediaType=text/plain"`
    
}

type UnsuspendUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

