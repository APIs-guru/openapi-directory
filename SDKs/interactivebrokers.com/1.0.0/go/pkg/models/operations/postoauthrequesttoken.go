package operations

type PostOauthRequestTokenRequestBody struct {
	OauthCallback        *string `json:"oauth_callback,omitempty"`
	OauthConsumerKey     *string `json:"oauth_consumer_key,omitempty"`
	OauthNonce           *string `json:"oauth_nonce,omitempty"`
	OauthSignature       *string `json:"oauth_signature,omitempty"`
	OauthSignatureMethod *string `json:"oauth_signature_method,omitempty"`
	OauthTimestamp       *string `json:"oauth_timestamp,omitempty"`
}

type PostOauthRequestToken200ApplicationJSON struct {
	OauthToken *string `json:"oauth_token,omitempty"`
}

type PostOauthRequestTokenRequest struct {
	Request PostOauthRequestTokenRequestBody `request:"mediaType=application/json"`
}

type PostOauthRequestTokenResponse struct {
	ContentType                                   string
	PostOauthRequestToken200ApplicationJSONObject *PostOauthRequestToken200ApplicationJSON
	StatusCode                                    int64
}
