package shared

type GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type GetTokenMetadataResponseMetadataOfIssuanceDataUserData struct {
	Meta []GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta `json:"meta"`
}

type GetTokenMetadataResponseMetadataOfIssuanceData struct {
	Description *string                                                 `json:"description"`
	Issuer      *string                                                 `json:"issuer"`
	TokenName   *string                                                 `json:"tokenName"`
	UserData    *GetTokenMetadataResponseMetadataOfIssuanceDataUserData `json:"userData"`
}

type GetTokenMetadataResponseMetadataOfIssuance struct {
	Data *GetTokenMetadataResponseMetadataOfIssuanceData `json:"data"`
}

type GetTokenMetadataResponseMetadataOfUtxoUserData struct {
	Meta []map[string]interface{} `json:"meta"`
}

type GetTokenMetadataResponseMetadataOfUtxo struct {
	UserData *GetTokenMetadataResponseMetadataOfUtxoUserData `json:"userData"`
}

type GetTokenMetadataResponse struct {
	AggregationPolicy     *string                                     `json:"aggregationPolicy"`
	Divisibility          *float64                                    `json:"divisibility"`
	FirstBlock            *float64                                    `json:"firstBlock"`
	InitialIssuanceAmount *float64                                    `json:"initialIssuanceAmount"`
	IssuanceTxid          *string                                     `json:"issuanceTxid"`
	IssueAddress          *string                                     `json:"issueAddress"`
	LockStatus            *bool                                       `json:"lockStatus"`
	MetadataOfIssuance    *GetTokenMetadataResponseMetadataOfIssuance `json:"metadataOfIssuance"`
	MetadataOfUtxo        *GetTokenMetadataResponseMetadataOfUtxo     `json:"metadataOfUtxo"`
	NumOfBurns            *float64                                    `json:"numOfBurns"`
	NumOfHolders          *float64                                    `json:"numOfHolders"`
	NumOfIssuance         *float64                                    `json:"numOfIssuance"`
	NumOfTransfers        *float64                                    `json:"numOfTransfers"`
	SomeUtxo              *string                                     `json:"someUtxo"`
	TokenID               *string                                     `json:"tokenId"`
	TotalSupply           *float64                                    `json:"totalSupply"`
}
