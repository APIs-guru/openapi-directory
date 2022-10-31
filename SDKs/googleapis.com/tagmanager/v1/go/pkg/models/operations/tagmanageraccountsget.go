package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type TagmanagerAccountsGetQueryParams struct {
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

type TagmanagerAccountsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsGetSecurity struct {
    Option1 *TagmanagerAccountsGetSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsGetSecurityOption2 `security:"option"`
    Option3 *TagmanagerAccountsGetSecurityOption3 `security:"option"`
    
}

type TagmanagerAccountsGetRequest struct {
    PathParams TagmanagerAccountsGetPathParams 
    QueryParams TagmanagerAccountsGetQueryParams 
    Security TagmanagerAccountsGetSecurity 
    
}

type TagmanagerAccountsGetResponse struct {
    Account *shared.Account 
    ContentType string 
    StatusCode int64 
    
}

