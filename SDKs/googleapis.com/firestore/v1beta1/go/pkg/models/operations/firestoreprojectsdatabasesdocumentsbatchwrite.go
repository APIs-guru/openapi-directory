package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsBatchWritePathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchWriteSecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsBatchWriteRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsBatchWritePathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams 
    Request *shared.BatchWriteRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsBatchWriteSecurity 
    
}

type FirestoreProjectsDatabasesDocumentsBatchWriteResponse struct {
    BatchWriteResponse *shared.BatchWriteResponse 
    ContentType string 
    StatusCode int64 
    
}

