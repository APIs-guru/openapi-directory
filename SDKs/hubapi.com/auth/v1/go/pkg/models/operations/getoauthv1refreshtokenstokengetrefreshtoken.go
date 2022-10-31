package operations

import (
"openapi/pkg/models/shared")

type GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type GetOauthV1RefreshTokensTokenGetRefreshTokenRequest struct {
    PathParams GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams 
    
}

type GetOauthV1RefreshTokensTokenGetRefreshTokenResponse struct {
    Body []byte 
    ContentType string 
    RefreshTokenInfoResponse *shared.RefreshTokenInfoResponse 
    StatusCode int64 
    
}

