package operations



type GetBasicAuthUserPasswdPathParams struct {
    Passwd string `pathParam:"style=simple,explode=false,name=passwd"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type GetBasicAuthUserPasswdRequest struct {
    PathParams GetBasicAuthUserPasswdPathParams 
    
}

type GetBasicAuthUserPasswdResponse struct {
    ContentType string 
    StatusCode int64 
    
}

