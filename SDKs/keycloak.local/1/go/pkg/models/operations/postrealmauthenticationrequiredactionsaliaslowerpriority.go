package operations



type PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest struct {
    PathParams PostRealmAuthenticationRequiredActionsAliasLowerPriorityPathParams 
    
}

type PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse struct {
    ContentType string 
    StatusCode int64 
    
}

