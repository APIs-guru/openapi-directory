package operations



type SecretsSecretsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SecretsSecretsDeleteRequest struct {
    PathParams SecretsSecretsDeletePathParams 
    
}

type SecretsSecretsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

