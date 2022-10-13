package shared

type IssueTokenRequestFlags struct {
	SplitChange *bool `json:"splitChange"`
}

type IssueTokenRequestMetadataEncryptions struct {
	Format *string `json:"format"`
	Key    *string `json:"key"`
	Pubkey *string `json:"pubkey"`
	Type   *string `json:"type"`
}

type IssueTokenRequestMetadataRulesExpiration struct {
	Locked     *bool    `json:"locked"`
	ValidUntil *float64 `json:"validUntil"`
}

type IssueTokenRequestMetadataRulesFeesItems struct {
	Address *string `json:"address"`
	TokenID *string `json:"tokenId"`
	Value   *string `json:"value"`
}

type IssueTokenRequestMetadataRulesFees struct {
	Items  []IssueTokenRequestMetadataRulesFeesItems `json:"items"`
	Locked *bool                                     `json:"locked"`
}

type IssueTokenRequestMetadataRulesHolders struct {
	Address *string `json:"address"`
	Locked  *bool   `json:"locked"`
}

type IssueTokenRequestMetadataRules struct {
	Expiration *IssueTokenRequestMetadataRulesExpiration `json:"expiration"`
	Fees       *IssueTokenRequestMetadataRulesFees       `json:"fees"`
	Holders    []IssueTokenRequestMetadataRulesHolders   `json:"holders"`
}

type IssueTokenRequestMetadataUrls struct {
	DataHash *string `json:"dataHash"`
	MimeType *string `json:"mimeType"`
	Name     *string `json:"name"`
	URL      *string `json:"url"`
}

type IssueTokenRequestMetadataUserDataMeta struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type IssueTokenRequestMetadataUserData struct {
	Meta []IssueTokenRequestMetadataUserDataMeta `json:"meta"`
}

type IssueTokenRequestMetadata struct {
	Description *string                                `json:"description"`
	Encryptions []IssueTokenRequestMetadataEncryptions `json:"encryptions"`
	Issuer      *string                                `json:"issuer"`
	Rules       *IssueTokenRequestMetadataRules        `json:"rules"`
	TokenName   *string                                `json:"tokenName"`
	Urls        []IssueTokenRequestMetadataUrls        `json:"urls"`
	UserData    *IssueTokenRequestMetadataUserData     `json:"userData"`
}

type IssueTokenRequestTransfer struct {
	Address *string  `json:"address"`
	Amount  *float64 `json:"amount"`
}

type IssueTokenRequest struct {
	Amount       float64                     `json:"amount"`
	Divisibility float64                     `json:"divisibility"`
	Fee          float64                     `json:"fee"`
	Flags        *IssueTokenRequestFlags     `json:"flags"`
	IssueAddress string                      `json:"issueAddress"`
	Metadata     *IssueTokenRequestMetadata  `json:"metadata"`
	Reissuable   bool                        `json:"reissuable"`
	Transfer     []IssueTokenRequestTransfer `json:"transfer"`
}
