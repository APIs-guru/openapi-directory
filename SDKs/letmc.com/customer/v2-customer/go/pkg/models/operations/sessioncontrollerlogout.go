package operations



type SessionControllerLogoutPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type SessionControllerLogoutQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type SessionControllerLogoutRequest struct {
    PathParams SessionControllerLogoutPathParams 
    QueryParams SessionControllerLogoutQueryParams 
    
}

type SessionControllerLogoutResponse struct {
    ContentType string 
    StatusCode int64 
    
}

