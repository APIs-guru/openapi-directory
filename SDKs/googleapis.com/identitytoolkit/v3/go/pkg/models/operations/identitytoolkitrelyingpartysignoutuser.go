package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitRelyingpartySignOutUserQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type IdentitytoolkitRelyingpartySignOutUserSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitRelyingpartySignOutUserRequest struct {
    QueryParams IdentitytoolkitRelyingpartySignOutUserQueryParams 
    Request *shared.IdentitytoolkitRelyingpartySignOutUserRequest `request:"mediaType=application/json"`
    Security IdentitytoolkitRelyingpartySignOutUserSecurity 
    
}

type IdentitytoolkitRelyingpartySignOutUserResponse struct {
    ContentType string 
    IdentitytoolkitRelyingpartySignOutUserResponse *shared.IdentitytoolkitRelyingpartySignOutUserResponse 
    StatusCode int64 
    
}

