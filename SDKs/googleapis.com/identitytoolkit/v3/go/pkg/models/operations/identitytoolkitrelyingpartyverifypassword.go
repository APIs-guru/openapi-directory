package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitRelyingpartyVerifyPasswordQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type IdentitytoolkitRelyingpartyVerifyPasswordSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartyVerifyPasswordRequest struct {
    QueryParams IdentitytoolkitRelyingpartyVerifyPasswordQueryParams 
    Request *shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitRelyingpartyVerifyPasswordSecurity 
    
}

type IdentitytoolkitRelyingpartyVerifyPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyPasswordResponse *shared.VerifyPasswordResponse 
    
}

