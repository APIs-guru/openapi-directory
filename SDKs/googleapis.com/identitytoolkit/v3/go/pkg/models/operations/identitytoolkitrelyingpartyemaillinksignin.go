package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type IdentitytoolkitRelyingpartyEmailLinkSigninSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartyEmailLinkSigninRequest struct {
    QueryParams IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams 
    Request *shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitRelyingpartyEmailLinkSigninSecurity 
    
}

type IdentitytoolkitRelyingpartyEmailLinkSigninResponse struct {
    ContentType string 
    EmailLinkSigninResponse *shared.EmailLinkSigninResponse 
    StatusCode int64 
    
}

