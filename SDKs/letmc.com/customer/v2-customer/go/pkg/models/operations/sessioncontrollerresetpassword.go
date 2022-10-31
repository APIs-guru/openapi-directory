package operations



type SessionControllerResetPasswordPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type SessionControllerResetPasswordQueryParams struct {
    Email string `queryParam:"style=form,explode=true,name=email"`
    
}

type SessionControllerResetPasswordRequest struct {
    PathParams SessionControllerResetPasswordPathParams 
    QueryParams SessionControllerResetPasswordQueryParams 
    
}

type SessionControllerResetPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

