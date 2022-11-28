package shared

// SendTokenRequestFlags
// Object representing flags that potentialy modify this transaction
type SendTokenRequestFlags struct {
	SplitChange *bool `json:"splitChange,omitempty"`
}

type SendTokenRequestMetadataEncryptions struct {
	Format *string `json:"format,omitempty"`
	Key    *string `json:"key,omitempty"`
	Pubkey *string `json:"pubkey,omitempty"`
	Type   *string `json:"type,omitempty"`
}

// SendTokenRequestMetadataRulesExpiration
// Object describing expiration rules of the token
type SendTokenRequestMetadataRulesExpiration struct {
	Locked     *bool    `json:"locked,omitempty"`
	ValidUntil *float64 `json:"validUntil,omitempty"`
}

type SendTokenRequestMetadataRulesFeesItems struct {
	Address *string `json:"address,omitempty"`
	TokenID *string `json:"tokenId,omitempty"`
	Value   *string `json:"value,omitempty"`
}

type SendTokenRequestMetadataRulesFees struct {
	Items  []SendTokenRequestMetadataRulesFeesItems `json:"items,omitempty"`
	Locked *bool                                    `json:"locked,omitempty"`
}

type SendTokenRequestMetadataRulesHolders struct {
	Address *string `json:"address,omitempty"`
	Locked  *bool   `json:"locked,omitempty"`
}

// SendTokenRequestMetadataRules
// Object describing token rules
type SendTokenRequestMetadataRules struct {
	Expiration *SendTokenRequestMetadataRulesExpiration `json:"expiration,omitempty"`
	Fees       *SendTokenRequestMetadataRulesFees       `json:"fees,omitempty"`
	Holders    []SendTokenRequestMetadataRulesHolders   `json:"holders,omitempty"`
}

type SendTokenRequestMetadataUrls struct {
	DataHash *string `json:"dataHash,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
	Name     *string `json:"name,omitempty"`
	URL      *string `json:"url,omitempty"`
}

type SendTokenRequestMetadataUserDataMeta struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SendTokenRequestMetadataUserData
// Metadata set by user on token
type SendTokenRequestMetadataUserData struct {
	Meta []SendTokenRequestMetadataUserDataMeta `json:"meta,omitempty"`
}

// SendTokenRequestMetadata
// Object representing all metadata at token issuance
type SendTokenRequestMetadata struct {
	Description *string                               `json:"description,omitempty"`
	Encryptions []SendTokenRequestMetadataEncryptions `json:"encryptions,omitempty"`
	Issuer      *string                               `json:"issuer,omitempty"`
	Rules       *SendTokenRequestMetadataRules        `json:"rules,omitempty"`
	TokenName   *string                               `json:"tokenName,omitempty"`
	Urls        []SendTokenRequestMetadataUrls        `json:"urls,omitempty"`
	UserData    *SendTokenRequestMetadataUserData     `json:"userData,omitempty"`
}

type SendTokenRequestTo struct {
	Address *string  `json:"address,omitempty"`
	Amount  *float64 `json:"amount,omitempty"`
	TokenID *string  `json:"tokenId,omitempty"`
}

type SendTokenRequest struct {
	Fee      float64                   `json:"fee"`
	Flags    *SendTokenRequestFlags    `json:"flags,omitempty"`
	From     []string                  `json:"from,omitempty"`
	Metadata *SendTokenRequestMetadata `json:"metadata,omitempty"`
	Sendutxo []string                  `json:"sendutxo,omitempty"`
	To       []SendTokenRequestTo      `json:"to"`
}
