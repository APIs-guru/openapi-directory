package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsBatchGetPathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchGetQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchGetSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchGetRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsBatchGetPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsBatchGetQueryParams 
    Request *shared.BatchGetDocumentsRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsBatchGetSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsBatchGetResponse struct {
    BatchGetDocumentsResponse *shared.BatchGetDocumentsResponse 
    ContentType string 
    StatusCode int64 
    
}

