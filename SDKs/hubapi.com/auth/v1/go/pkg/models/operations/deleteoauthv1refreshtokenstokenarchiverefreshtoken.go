package operations

type DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest struct {
	PathParams DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams
}

type DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
