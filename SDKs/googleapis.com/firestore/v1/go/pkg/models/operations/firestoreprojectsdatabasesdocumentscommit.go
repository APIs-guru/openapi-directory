package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsCommitPathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type FirestoreProjectsDatabasesDocumentsCommitQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsDatabasesDocumentsCommitSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsCommitSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsCommitSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsCommitSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsCommitSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsCommitRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsCommitPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsCommitQueryParams 
    Request *shared.CommitRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsCommitSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsCommitResponse struct {
    CommitResponse *shared.CommitResponse 
    ContentType string 
    StatusCode int64 
    
}

