package operations



type PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams struct {
    CredentialID string `pathParam:"style=simple,explode=false,name=credentialId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmUsersIDCredentialsCredentialIDUserLabelRequest struct {
    PathParams PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams 
    Request string `request:"mediaType=text/plain"`
    
}

type PutRealmUsersIDCredentialsCredentialIDUserLabelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

