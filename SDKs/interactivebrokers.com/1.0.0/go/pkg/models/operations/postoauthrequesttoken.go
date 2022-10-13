package operations

type PostOauthRequestTokenRequestBody struct {
	OauthCallback        *string `json:"oauth_callback"`
	OauthConsumerKey     *string `json:"oauth_consumer_key"`
	OauthNonce           *string `json:"oauth_nonce"`
	OauthSignature       *string `json:"oauth_signature"`
	OauthSignatureMethod *string `json:"oauth_signature_method"`
	OauthTimestamp       *string `json:"oauth_timestamp"`
}

type PostOauthRequestTokenRequest struct {
	Request PostOauthRequestTokenRequestBody `request:"mediaType=application/json"`
}

type PostOauthRequestToken200ApplicationJSON struct {
	OauthToken *string `json:"oauth_token"`
}

type PostOauthRequestTokenResponse struct {
	ContentType                                   string
	PostOauthRequestToken200ApplicationJSONObject *PostOauthRequestToken200ApplicationJSON
	StatusCode                                    int64
}
