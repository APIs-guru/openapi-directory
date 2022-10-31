package operations



type PutRealmUsersIDDisableCredentialTypesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmUsersIDDisableCredentialTypesRequest struct {
    PathParams PutRealmUsersIDDisableCredentialTypesPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type PutRealmUsersIDDisableCredentialTypesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

