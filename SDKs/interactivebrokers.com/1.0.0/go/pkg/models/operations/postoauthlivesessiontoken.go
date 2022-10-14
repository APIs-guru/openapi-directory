package operations

type PostOauthLiveSessionTokenRequestBody struct {
	DiffieHellmanChallenge *string `json:"diffie_hellman_challenge,omitempty"`
	OauthConsumerKey       *string `json:"oauth_consumer_key,omitempty"`
	OauthNonce             *string `json:"oauth_nonce,omitempty"`
	OauthSignature         *string `json:"oauth_signature,omitempty"`
	OauthSignatureMethod   *string `json:"oauth_signature_method,omitempty"`
	OauthTimestamp         *string `json:"oauth_timestamp,omitempty"`
	OauthToken             *string `json:"oauth_token,omitempty"`
}

type PostOauthLiveSessionTokenRequest struct {
	Request PostOauthLiveSessionTokenRequestBody `request:"mediaType=application/json"`
}

type PostOauthLiveSessionToken200ApplicationJSON struct {
	DiffieHellmanResponse     *string `json:"diffie_hellman_response,omitempty"`
	LiveSessionTokenSignature *string `json:"live_session_token_signature,omitempty"`
}

type PostOauthLiveSessionTokenResponse struct {
	ContentType                                       string
	PostOauthLiveSessionToken200ApplicationJSONObject *PostOauthLiveSessionToken200ApplicationJSON
	StatusCode                                        int64
}
