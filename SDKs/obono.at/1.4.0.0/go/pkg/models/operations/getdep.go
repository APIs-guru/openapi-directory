package operations



type GetDepPathParams struct {
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type GetDepRequest struct {
    PathParams GetDepPathParams 
    
}

type GetDepResponse struct {
    ContentType string 
    StatusCode int64 
    
}

