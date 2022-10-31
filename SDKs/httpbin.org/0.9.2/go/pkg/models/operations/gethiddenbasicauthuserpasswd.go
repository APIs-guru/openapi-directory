package operations



type GetHiddenBasicAuthUserPasswdPathParams struct {
    Passwd string `pathParam:"style=simple,explode=false,name=passwd"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type GetHiddenBasicAuthUserPasswdRequest struct {
    PathParams GetHiddenBasicAuthUserPasswdPathParams 
    
}

type GetHiddenBasicAuthUserPasswdResponse struct {
    ContentType string 
    StatusCode int64 
    
}

