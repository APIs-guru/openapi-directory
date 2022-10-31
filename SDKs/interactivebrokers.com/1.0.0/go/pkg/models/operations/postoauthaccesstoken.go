package operations



type PostOauthAccessTokenRequestBody struct {
    OauthConsumerKey *string `json:"oauth_consumer_key,omitempty"`
    OauthNonce *string `json:"oauth_nonce,omitempty"`
    OauthSignature *string `json:"oauth_signature,omitempty"`
    OauthSignatureMethod *string `json:"oauth_signature_method,omitempty"`
    OauthTimestamp *string `json:"oauth_timestamp,omitempty"`
    OauthToken *string `json:"oauth_token,omitempty"`
    OauthVerifier *string `json:"oauth_verifier,omitempty"`
    
}

type PostOauthAccessTokenRequest struct {
    Request PostOauthAccessTokenRequestBody `request:"mediaType=application/json"`
    
}

type PostOauthAccessToken200ApplicationJSON struct {
    OauthToken *string `json:"oauth_token,omitempty"`
    OauthTokenSecret *string `json:"oauth_token_secret,omitempty"`
    
}

type PostOauthAccessTokenResponse struct {
    ContentType string 
    PostOauthAccessToken200ApplicationJSONObject *PostOauthAccessToken200ApplicationJSON 
    StatusCode int64 
    
}

