package operations



type GetUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetUserRequest struct {
    PathParams GetUserPathParams 
    
}

type GetUserResponse struct {
    ContentType string 
    StatusCode int64 
    GetUser200ApplicationJSONAny *interface{} 
    
}

