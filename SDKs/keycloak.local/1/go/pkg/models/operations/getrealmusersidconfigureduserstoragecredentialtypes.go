package operations



type GetRealmUsersIDConfiguredUserStorageCredentialTypesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDConfiguredUserStorageCredentialTypesRequest struct {
    PathParams GetRealmUsersIDConfiguredUserStorageCredentialTypesPathParams 
    
}

type GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse struct {
    ContentType string 
    GetRealmUsersIDConfiguredUserStorageCredentialTypes2XxApplicationJSONStrings []string 
    StatusCode int64 
    
}

