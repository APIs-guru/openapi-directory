package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartyVerifyCustomTokenRequest struct {
    QueryParams IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams 
    Request *shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity 
    
}

type IdentitytoolkitRelyingpartyVerifyCustomTokenResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyCustomTokenResponse *shared.VerifyCustomTokenResponse 
    
}

