package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesDomainsUpdatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebasehostingSitesDomainsUpdateQueryParams struct {
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

type FirebasehostingSitesDomainsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsUpdateSecurity struct {
    Option1 *FirebasehostingSitesDomainsUpdateSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesDomainsUpdateSecurityOption2 `security:"option"`
    
}

type FirebasehostingSitesDomainsUpdateRequest struct {
    PathParams FirebasehostingSitesDomainsUpdatePathParams 
    QueryParams FirebasehostingSitesDomainsUpdateQueryParams 
    Request *shared.Domain `request:"mediaType=application/json"`
    Security FirebasehostingSitesDomainsUpdateSecurity 
    
}

type FirebasehostingSitesDomainsUpdateResponse struct {
    ContentType string 
    Domain *shared.Domain 
    StatusCode int64 
    
}

