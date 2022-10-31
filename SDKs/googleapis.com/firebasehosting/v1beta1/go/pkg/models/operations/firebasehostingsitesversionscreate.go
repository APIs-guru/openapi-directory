package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesVersionsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingSitesVersionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SizeBytes *string `queryParam:"style=form,explode=true,name=sizeBytes"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VersionID *string `queryParam:"style=form,explode=true,name=versionId"`
    
}

type FirebasehostingSitesVersionsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesVersionsCreateSecurity struct {
    Option1 *FirebasehostingSitesVersionsCreateSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesVersionsCreateSecurityOption2 `security:"option"`
    
}

type FirebasehostingSitesVersionsCreateRequest struct {
    PathParams FirebasehostingSitesVersionsCreatePathParams 
    QueryParams FirebasehostingSitesVersionsCreateQueryParams 
    Request *shared.Version `request:"mediaType=application/json"`
    Security FirebasehostingSitesVersionsCreateSecurity 
    
}

type FirebasehostingSitesVersionsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Version *shared.Version 
    
}

