package operations



type GetDigestAuthQopUserPasswdPathParams struct {
    Passwd string `pathParam:"style=simple,explode=false,name=passwd"`
    Qop string `pathParam:"style=simple,explode=false,name=qop"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type GetDigestAuthQopUserPasswdRequest struct {
    PathParams GetDigestAuthQopUserPasswdPathParams 
    
}

type GetDigestAuthQopUserPasswdResponse struct {
    ContentType string 
    StatusCode int64 
    
}

