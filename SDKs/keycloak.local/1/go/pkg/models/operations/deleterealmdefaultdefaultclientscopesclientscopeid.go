package operations



type DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams struct {
    ClientScopeID string `pathParam:"style=simple,explode=false,name=clientScopeId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmDefaultDefaultClientScopesClientScopeIDRequest struct {
    PathParams DeleteRealmDefaultDefaultClientScopesClientScopeIDPathParams 
    
}

type DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

