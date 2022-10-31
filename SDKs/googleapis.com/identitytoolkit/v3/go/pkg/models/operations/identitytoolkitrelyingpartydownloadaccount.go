package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitRelyingpartyDownloadAccountQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartyDownloadAccountSecurity struct {
    Option1 *IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1 `security:"option"`
    Option2 *IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2 `security:"option"`
    
}

type IdentitytoolkitRelyingpartyDownloadAccountRequest struct {
    QueryParams IdentitytoolkitRelyingpartyDownloadAccountQueryParams 
    Request *shared.IdentitytoolkitRelyingpartyDownloadAccountRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitRelyingpartyDownloadAccountSecurity 
    
}

type IdentitytoolkitRelyingpartyDownloadAccountResponse struct {
    ContentType string 
    DownloadAccountResponse *shared.DownloadAccountResponse 
    StatusCode int64 
    
}

