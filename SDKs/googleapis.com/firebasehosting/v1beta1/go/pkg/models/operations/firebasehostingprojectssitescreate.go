package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingProjectsSitesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingProjectsSitesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SiteID *string `queryParam:"style=form,explode=true,name=siteId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingProjectsSitesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingProjectsSitesCreateSecurity struct {
    Option1 *FirebasehostingProjectsSitesCreateSecurityOption1 `security:"option"`
    Option2 *FirebasehostingProjectsSitesCreateSecurityOption2 `security:"option"`
    
}

type FirebasehostingProjectsSitesCreateRequest struct {
    PathParams FirebasehostingProjectsSitesCreatePathParams 
    QueryParams FirebasehostingProjectsSitesCreateQueryParams 
    Request *shared.Site `request:"mediaType=application/json"`
    Security FirebasehostingProjectsSitesCreateSecurity 
    
}

type FirebasehostingProjectsSitesCreateResponse struct {
    ContentType string 
    Site *shared.Site 
    StatusCode int64 
    
}

