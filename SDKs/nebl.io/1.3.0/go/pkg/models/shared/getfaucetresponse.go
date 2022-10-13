package shared

type GetFaucetResponseData struct {
	TxID *string `json:"txId"`
}

type GetFaucetResponse struct {
	Data   *GetFaucetResponseData `json:"data"`
	Status *string                `json:"status"`
}
