package operations



type PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDPathParams struct {
    CredentialID string `pathParam:"style=simple,explode=false,name=credentialId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    NewPreviousCredentialID string `pathParam:"style=simple,explode=false,name=newPreviousCredentialId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDRequest struct {
    PathParams PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDPathParams 
    
}

type PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

