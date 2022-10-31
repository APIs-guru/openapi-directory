package operations

import (
"openapi/pkg/models/shared")

type FirebaseProjectsDefaultLocationFinalizePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseProjectsDefaultLocationFinalizeQueryParams struct {
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

type FirebaseProjectsDefaultLocationFinalizeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsDefaultLocationFinalizeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsDefaultLocationFinalizeSecurity struct {
    Option1 *FirebaseProjectsDefaultLocationFinalizeSecurityOption1 `security:"option"`
    Option2 *FirebaseProjectsDefaultLocationFinalizeSecurityOption2 `security:"option"`
    
}

type FirebaseProjectsDefaultLocationFinalizeRequest struct {
    PathParams FirebaseProjectsDefaultLocationFinalizePathParams 
    QueryParams FirebaseProjectsDefaultLocationFinalizeQueryParams 
    Request *shared.FinalizeDefaultLocationRequest `request:"mediaType=application/json"`
    Security FirebaseProjectsDefaultLocationFinalizeSecurity 
    
}

type FirebaseProjectsDefaultLocationFinalizeResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

