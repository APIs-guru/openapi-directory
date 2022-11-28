package shared

// IssueTokenRequestFlags
// Object representing flags that potentialy modify this transaction
type IssueTokenRequestFlags struct {
	SplitChange *bool `json:"splitChange,omitempty"`
}

type IssueTokenRequestMetadataEncryptions struct {
	Format *string `json:"format,omitempty"`
	Key    *string `json:"key,omitempty"`
	Pubkey *string `json:"pubkey,omitempty"`
	Type   *string `json:"type,omitempty"`
}

// IssueTokenRequestMetadataRulesExpiration
// Object describing expiration rules of the token
type IssueTokenRequestMetadataRulesExpiration struct {
	Locked     *bool    `json:"locked,omitempty"`
	ValidUntil *float64 `json:"validUntil,omitempty"`
}

type IssueTokenRequestMetadataRulesFeesItems struct {
	Address *string `json:"address,omitempty"`
	TokenID *string `json:"tokenId,omitempty"`
	Value   *string `json:"value,omitempty"`
}

type IssueTokenRequestMetadataRulesFees struct {
	Items  []IssueTokenRequestMetadataRulesFeesItems `json:"items,omitempty"`
	Locked *bool                                     `json:"locked,omitempty"`
}

type IssueTokenRequestMetadataRulesHolders struct {
	Address *string `json:"address,omitempty"`
	Locked  *bool   `json:"locked,omitempty"`
}

// IssueTokenRequestMetadataRules
// Object describing token rules
type IssueTokenRequestMetadataRules struct {
	Expiration *IssueTokenRequestMetadataRulesExpiration `json:"expiration,omitempty"`
	Fees       *IssueTokenRequestMetadataRulesFees       `json:"fees,omitempty"`
	Holders    []IssueTokenRequestMetadataRulesHolders   `json:"holders,omitempty"`
}

type IssueTokenRequestMetadataUrls struct {
	DataHash *string `json:"dataHash,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
	Name     *string `json:"name,omitempty"`
	URL      *string `json:"url,omitempty"`
}

type IssueTokenRequestMetadataUserDataMeta struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// IssueTokenRequestMetadataUserData
// Metadata set by user on token
type IssueTokenRequestMetadataUserData struct {
	Meta []IssueTokenRequestMetadataUserDataMeta `json:"meta,omitempty"`
}

// IssueTokenRequestMetadata
// Object representing all metadata at token issuance
type IssueTokenRequestMetadata struct {
	Description *string                                `json:"description,omitempty"`
	Encryptions []IssueTokenRequestMetadataEncryptions `json:"encryptions,omitempty"`
	Issuer      *string                                `json:"issuer,omitempty"`
	Rules       *IssueTokenRequestMetadataRules        `json:"rules,omitempty"`
	TokenName   *string                                `json:"tokenName,omitempty"`
	Urls        []IssueTokenRequestMetadataUrls        `json:"urls,omitempty"`
	UserData    *IssueTokenRequestMetadataUserData     `json:"userData,omitempty"`
}

type IssueTokenRequestTransfer struct {
	Address *string  `json:"address,omitempty"`
	Amount  *float64 `json:"amount,omitempty"`
}

type IssueTokenRequest struct {
	Amount       float64                     `json:"amount"`
	Divisibility float64                     `json:"divisibility"`
	Fee          float64                     `json:"fee"`
	Flags        *IssueTokenRequestFlags     `json:"flags,omitempty"`
	IssueAddress string                      `json:"issueAddress"`
	Metadata     *IssueTokenRequestMetadata  `json:"metadata,omitempty"`
	Reissuable   bool                        `json:"reissuable"`
	Transfer     []IssueTokenRequestTransfer `json:"transfer"`
}
