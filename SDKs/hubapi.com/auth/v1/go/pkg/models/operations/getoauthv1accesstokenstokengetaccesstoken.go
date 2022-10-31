package operations

import (
"openapi/pkg/models/shared")

type GetOauthV1AccessTokensTokenGetAccessTokenPathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type GetOauthV1AccessTokensTokenGetAccessTokenRequest struct {
    PathParams GetOauthV1AccessTokensTokenGetAccessTokenPathParams 
    
}

type GetOauthV1AccessTokensTokenGetAccessTokenResponse struct {
    AccessTokenInfoResponse *shared.AccessTokenInfoResponse 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

