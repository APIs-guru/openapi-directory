package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsBeginTransactionRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams 
    Request *shared.BeginTransactionRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsBeginTransactionResponse struct {
    BeginTransactionResponse *shared.BeginTransactionResponse 
    ContentType string 
    StatusCode int64 
    
}

