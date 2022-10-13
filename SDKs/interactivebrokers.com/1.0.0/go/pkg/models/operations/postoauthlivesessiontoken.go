package operations

type PostOauthLiveSessionTokenRequestBody struct {
	DiffieHellmanChallenge *string `json:"diffie_hellman_challenge"`
	OauthConsumerKey       *string `json:"oauth_consumer_key"`
	OauthNonce             *string `json:"oauth_nonce"`
	OauthSignature         *string `json:"oauth_signature"`
	OauthSignatureMethod   *string `json:"oauth_signature_method"`
	OauthTimestamp         *string `json:"oauth_timestamp"`
	OauthToken             *string `json:"oauth_token"`
}

type PostOauthLiveSessionTokenRequest struct {
	Request PostOauthLiveSessionTokenRequestBody `request:"mediaType=application/json"`
}

type PostOauthLiveSessionToken200ApplicationJSON struct {
	DiffieHellmanResponse     *string `json:"diffie_hellman_response"`
	LiveSessionTokenSignature *string `json:"live_session_token_signature"`
}

type PostOauthLiveSessionTokenResponse struct {
	ContentType                                       string
	PostOauthLiveSessionToken200ApplicationJSONObject *PostOauthLiveSessionToken200ApplicationJSON
	StatusCode                                        int64
}
