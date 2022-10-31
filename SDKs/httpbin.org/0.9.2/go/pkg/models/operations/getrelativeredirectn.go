package operations



type GetRelativeRedirectNPathParams struct {
    N int64 `pathParam:"style=simple,explode=false,name=n"`
    
}

type GetRelativeRedirectNRequest struct {
    PathParams GetRelativeRedirectNPathParams 
    
}

type GetRelativeRedirectNResponse struct {
    ContentType string 
    StatusCode int64 
    
}

