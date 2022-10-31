package operations

import (
"openapi/pkg/models/shared")

type FirestoreProjectsDatabasesOperationsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirestoreProjectsDatabasesOperationsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CurrentDocumentExists *bool `queryParam:"style=form,explode=true,name=currentDocument.exists"`
    CurrentDocumentUpdateTime *string `queryParam:"style=form,explode=true,name=currentDocument.updateTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirestoreProjectsDatabasesOperationsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesOperationsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirestoreProjectsDatabasesOperationsDeleteSecurity struct {
    Option1 *FirestoreProjectsDatabasesOperationsDeleteSecurityOption1 `security:"option"`
    Option2 *FirestoreProjectsDatabasesOperationsDeleteSecurityOption2 `security:"option"`
    
}

type FirestoreProjectsDatabasesOperationsDeleteRequest struct {
    PathParams FirestoreProjectsDatabasesOperationsDeletePathParams 
    QueryParams FirestoreProjectsDatabasesOperationsDeleteQueryParams 
    Security FirestoreProjectsDatabasesOperationsDeleteSecurity 
    
}

type FirestoreProjectsDatabasesOperationsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

