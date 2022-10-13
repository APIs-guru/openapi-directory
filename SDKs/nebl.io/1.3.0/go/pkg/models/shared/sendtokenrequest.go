package shared

type SendTokenRequestFlags struct {
	SplitChange *bool `json:"splitChange"`
}

type SendTokenRequestMetadataEncryptions struct {
	Format *string `json:"format"`
	Key    *string `json:"key"`
	Pubkey *string `json:"pubkey"`
	Type   *string `json:"type"`
}

type SendTokenRequestMetadataRulesExpiration struct {
	Locked     *bool    `json:"locked"`
	ValidUntil *float64 `json:"validUntil"`
}

type SendTokenRequestMetadataRulesFeesItems struct {
	Address *string `json:"address"`
	TokenID *string `json:"tokenId"`
	Value   *string `json:"value"`
}

type SendTokenRequestMetadataRulesFees struct {
	Items  []SendTokenRequestMetadataRulesFeesItems `json:"items"`
	Locked *bool                                    `json:"locked"`
}

type SendTokenRequestMetadataRulesHolders struct {
	Address *string `json:"address"`
	Locked  *bool   `json:"locked"`
}

type SendTokenRequestMetadataRules struct {
	Expiration *SendTokenRequestMetadataRulesExpiration `json:"expiration"`
	Fees       *SendTokenRequestMetadataRulesFees       `json:"fees"`
	Holders    []SendTokenRequestMetadataRulesHolders   `json:"holders"`
}

type SendTokenRequestMetadataUrls struct {
	DataHash *string `json:"dataHash"`
	MimeType *string `json:"mimeType"`
	Name     *string `json:"name"`
	URL      *string `json:"url"`
}

type SendTokenRequestMetadataUserDataMeta struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type SendTokenRequestMetadataUserData struct {
	Meta []SendTokenRequestMetadataUserDataMeta `json:"meta"`
}

type SendTokenRequestMetadata struct {
	Description *string                               `json:"description"`
	Encryptions []SendTokenRequestMetadataEncryptions `json:"encryptions"`
	Issuer      *string                               `json:"issuer"`
	Rules       *SendTokenRequestMetadataRules        `json:"rules"`
	TokenName   *string                               `json:"tokenName"`
	Urls        []SendTokenRequestMetadataUrls        `json:"urls"`
	UserData    *SendTokenRequestMetadataUserData     `json:"userData"`
}

type SendTokenRequestTo struct {
	Address *string  `json:"address"`
	Amount  *float64 `json:"amount"`
	TokenID *string  `json:"tokenId"`
}

type SendTokenRequest struct {
	Fee      float64                   `json:"fee"`
	Flags    *SendTokenRequestFlags    `json:"flags"`
	From     []string                  `json:"from"`
	Metadata *SendTokenRequestMetadata `json:"metadata"`
	Sendutxo []string                  `json:"sendutxo"`
	To       []SendTokenRequestTo      `json:"to"`
}
