package operations



type SessionControllerChangePasswordPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type SessionControllerChangePasswordQueryParams struct {
    NewPassword string `queryParam:"style=form,explode=true,name=newPassword"`
    OldPassword string `queryParam:"style=form,explode=true,name=oldPassword"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type SessionControllerChangePasswordRequest struct {
    PathParams SessionControllerChangePasswordPathParams 
    QueryParams SessionControllerChangePasswordQueryParams 
    
}

type SessionControllerChangePasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

