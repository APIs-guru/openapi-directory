package operations



type DeleteRealmClientScopesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmClientScopesIDRequest struct {
    PathParams DeleteRealmClientScopesIDPathParams 
    
}

type DeleteRealmClientScopesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

