package operations

type PostAuthTokenRequestBody struct {
	APIKey string `json:"api_key"`
}

type PostAuthToken200ApplicationJSON struct {
	AccessToken string `json:"access_token"`
	ExpiresAt   int64  `json:"expires_at"`
}

type PostAuthTokenRequest struct {
	Request *PostAuthTokenRequestBody `request:"mediaType=application/json"`
}

type PostAuthTokenResponse struct {
	ContentType                           string
	StatusCode                            int64
	PostAuthToken200ApplicationJSONObject *PostAuthToken200ApplicationJSON
}
