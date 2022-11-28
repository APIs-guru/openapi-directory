package shared

type GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetTokenMetadataResponseMetadataOfIssuanceDataUserData
// Metadata set by user on token
type GetTokenMetadataResponseMetadataOfIssuanceDataUserData struct {
	Meta []GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta `json:"meta,omitempty"`
}

type GetTokenMetadataResponseMetadataOfIssuanceData struct {
	Description *string                                                 `json:"description,omitempty"`
	Issuer      *string                                                 `json:"issuer,omitempty"`
	TokenName   *string                                                 `json:"tokenName,omitempty"`
	UserData    *GetTokenMetadataResponseMetadataOfIssuanceDataUserData `json:"userData,omitempty"`
}

// GetTokenMetadataResponseMetadataOfIssuance
// Metadata set at issuance
type GetTokenMetadataResponseMetadataOfIssuance struct {
	Data *GetTokenMetadataResponseMetadataOfIssuanceData `json:"data,omitempty"`
}

// GetTokenMetadataResponseMetadataOfUtxoUserData
// Metadata set by user on token for UTXO
type GetTokenMetadataResponseMetadataOfUtxoUserData struct {
	Meta []map[string]interface{} `json:"meta,omitempty"`
}

// GetTokenMetadataResponseMetadataOfUtxo
// Metadata set for UTXO
type GetTokenMetadataResponseMetadataOfUtxo struct {
	UserData *GetTokenMetadataResponseMetadataOfUtxoUserData `json:"userData,omitempty"`
}

type GetTokenMetadataResponse struct {
	AggregationPolicy     *string                                     `json:"aggregationPolicy,omitempty"`
	Divisibility          *float64                                    `json:"divisibility,omitempty"`
	FirstBlock            *float64                                    `json:"firstBlock,omitempty"`
	InitialIssuanceAmount *float64                                    `json:"initialIssuanceAmount,omitempty"`
	IssuanceTxid          *string                                     `json:"issuanceTxid,omitempty"`
	IssueAddress          *string                                     `json:"issueAddress,omitempty"`
	LockStatus            *bool                                       `json:"lockStatus,omitempty"`
	MetadataOfIssuance    *GetTokenMetadataResponseMetadataOfIssuance `json:"metadataOfIssuance,omitempty"`
	MetadataOfUtxo        *GetTokenMetadataResponseMetadataOfUtxo     `json:"metadataOfUtxo,omitempty"`
	NumOfBurns            *float64                                    `json:"numOfBurns,omitempty"`
	NumOfHolders          *float64                                    `json:"numOfHolders,omitempty"`
	NumOfIssuance         *float64                                    `json:"numOfIssuance,omitempty"`
	NumOfTransfers        *float64                                    `json:"numOfTransfers,omitempty"`
	SomeUtxo              *string                                     `json:"someUtxo,omitempty"`
	TokenID               *string                                     `json:"tokenId,omitempty"`
	TotalSupply           *float64                                    `json:"totalSupply,omitempty"`
}
