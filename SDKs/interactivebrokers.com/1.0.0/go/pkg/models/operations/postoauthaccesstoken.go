package operations

type PostOauthAccessTokenRequestBody struct {
	OauthConsumerKey     *string `json:"oauth_consumer_key"`
	OauthNonce           *string `json:"oauth_nonce"`
	OauthSignature       *string `json:"oauth_signature"`
	OauthSignatureMethod *string `json:"oauth_signature_method"`
	OauthTimestamp       *string `json:"oauth_timestamp"`
	OauthToken           *string `json:"oauth_token"`
	OauthVerifier        *string `json:"oauth_verifier"`
}

type PostOauthAccessTokenRequest struct {
	Request PostOauthAccessTokenRequestBody `request:"mediaType=application/json"`
}

type PostOauthAccessToken200ApplicationJSON struct {
	OauthToken       *string `json:"oauth_token"`
	OauthTokenSecret *string `json:"oauth_token_secret"`
}

type PostOauthAccessTokenResponse struct {
	ContentType                                  string
	PostOauthAccessToken200ApplicationJSONObject *PostOauthAccessToken200ApplicationJSON
	StatusCode                                   int64
}
