package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsServicesPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebaseappcheckProjectsServicesPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaseappcheckProjectsServicesPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsServicesPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsServicesPatchSecurity struct {
    Option1 *FirebaseappcheckProjectsServicesPatchSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsServicesPatchSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsServicesPatchRequest struct {
    PathParams FirebaseappcheckProjectsServicesPatchPathParams 
    QueryParams FirebaseappcheckProjectsServicesPatchQueryParams 
    Request *shared.GoogleFirebaseAppcheckV1Service `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsServicesPatchSecurity 
    
}

type FirebaseappcheckProjectsServicesPatchResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1Service *shared.GoogleFirebaseAppcheckV1Service 
    StatusCode int64 
    
}

