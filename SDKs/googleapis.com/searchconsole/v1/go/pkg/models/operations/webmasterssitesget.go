package operations

import (
"openapi/pkg/models/shared")

type WebmastersSitesGetPathParams struct {
    SiteURL string `pathParam:"style=simple,explode=false,name=siteUrl"`
    
}

type WebmastersSitesGetQueryParams struct {
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

type WebmastersSitesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSitesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSitesGetSecurity struct {
    Option1 *WebmastersSitesGetSecurityOption1 `security:"option"`
    Option2 *WebmastersSitesGetSecurityOption2 `security:"option"`
    
}

type WebmastersSitesGetRequest struct {
    PathParams WebmastersSitesGetPathParams 
    QueryParams WebmastersSitesGetQueryParams 
    Security WebmastersSitesGetSecurity 
    
}

type WebmastersSitesGetResponse struct {
    ContentType string 
    StatusCode int64 
    WmxSite *shared.WmxSite 
    
}

