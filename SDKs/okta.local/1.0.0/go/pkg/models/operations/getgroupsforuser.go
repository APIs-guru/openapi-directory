package operations



type GetGroupsForUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetGroupsForUserRequest struct {
    PathParams GetGroupsForUserPathParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    
}

type GetGroupsForUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

