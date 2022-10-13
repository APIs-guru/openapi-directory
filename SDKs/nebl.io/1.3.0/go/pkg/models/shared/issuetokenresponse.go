package shared

type IssueTokenResponse struct {
	TokenID *string `json:"tokenId"`
	TxHex   *string `json:"txHex"`
}
