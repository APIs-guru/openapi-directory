package operations



type GetRealmAuthenticationUnregisteredRequiredActionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationUnregisteredRequiredActionsRequest struct {
    PathParams GetRealmAuthenticationUnregisteredRequiredActionsPathParams 
    
}

type GetRealmAuthenticationUnregisteredRequiredActionsResponse struct {
    ContentType string 
    GetRealmAuthenticationUnregisteredRequiredActions2XxApplicationJSONObjects []map[string]interface{} 
    StatusCode int64 
    
}

