package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesDocumentsRunQueryPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirestoreProjectsDatabasesDocumentsRunQueryQueryParams struct {
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

type FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesDocumentsRunQuerySecurity struct {
    Option1 *FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesDocumentsRunQueryRequest struct {
    PathParams FirestoreProjectsDatabasesDocumentsRunQueryPathParams 
    QueryParams FirestoreProjectsDatabasesDocumentsRunQueryQueryParams 
    Request *shared.RunQueryRequest `request:"mediaType=application/json"`
    Security FirestoreProjectsDatabasesDocumentsRunQuerySecurity 
    
}

type FirestoreProjectsDatabasesDocumentsRunQueryResponse struct {
    ContentType string 
    RunQueryResponse *shared.RunQueryResponse 
    StatusCode int64 
    
}

