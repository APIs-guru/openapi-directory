package operations



type GetDigestAuthQopUserPasswdAlgorithmPathParams struct {
    Algorithm string `pathParam:"style=simple,explode=false,name=algorithm"`
    Passwd string `pathParam:"style=simple,explode=false,name=passwd"`
    Qop string `pathParam:"style=simple,explode=false,name=qop"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type GetDigestAuthQopUserPasswdAlgorithmRequest struct {
    PathParams GetDigestAuthQopUserPasswdAlgorithmPathParams 
    
}

type GetDigestAuthQopUserPasswdAlgorithmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

