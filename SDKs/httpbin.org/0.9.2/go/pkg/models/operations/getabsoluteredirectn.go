package operations



type GetAbsoluteRedirectNPathParams struct {
    N int64 `pathParam:"style=simple,explode=false,name=n"`
    
}

type GetAbsoluteRedirectNRequest struct {
    PathParams GetAbsoluteRedirectNPathParams 
    
}

type GetAbsoluteRedirectNResponse struct {
    ContentType string 
    StatusCode int64 
    
}

