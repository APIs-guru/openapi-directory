package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesDomainsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingSitesDomainsCreateQueryParams struct {
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

type FirebasehostingSitesDomainsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsCreateSecurity struct {
    Option1 *FirebasehostingSitesDomainsCreateSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesDomainsCreateSecurityOption2 `security:"option"`
    
}

type FirebasehostingSitesDomainsCreateRequest struct {
    PathParams FirebasehostingSitesDomainsCreatePathParams 
    QueryParams FirebasehostingSitesDomainsCreateQueryParams 
    Request *shared.Domain `request:"mediaType=application/json"`
    Security FirebasehostingSitesDomainsCreateSecurity 
    
}

type FirebasehostingSitesDomainsCreateResponse struct {
    ContentType string 
    Domain *shared.Domain 
    StatusCode int64 
    
}

