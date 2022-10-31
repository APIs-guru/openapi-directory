package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesDomainsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingSitesDomainsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingSitesDomainsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesDomainsListSecurity struct {
    Option1 *FirebasehostingSitesDomainsListSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesDomainsListSecurityOption2 `security:"option"`
    Option3 *FirebasehostingSitesDomainsListSecurityOption3 `security:"option"`
    Option4 *FirebasehostingSitesDomainsListSecurityOption4 `security:"option"`
    
}

type FirebasehostingSitesDomainsListRequest struct {
    PathParams FirebasehostingSitesDomainsListPathParams 
    QueryParams FirebasehostingSitesDomainsListQueryParams 
    Security FirebasehostingSitesDomainsListSecurity 
    
}

type FirebasehostingSitesDomainsListResponse struct {
    ContentType string 
    ListDomainsResponse *shared.ListDomainsResponse 
    StatusCode int64 
    
}

