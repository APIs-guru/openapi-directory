package operations



type GetAdministrationUserEntityIDPathParams struct {
    EntityID int32 `pathParam:"style=simple,explode=false,name=entityId"`
    
}

type GetAdministrationUserEntityIDHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type GetAdministrationUserEntityIDRequest struct {
    PathParams GetAdministrationUserEntityIDPathParams 
    Headers GetAdministrationUserEntityIDHeaders 
    
}

type GetAdministrationUserEntityIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

