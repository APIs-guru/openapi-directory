package shared



type GetFaucetResponseData struct {
    TxID *string `json:"txId,omitempty"`
    
}

type GetFaucetResponse struct {
    Data *GetFaucetResponseData `json:"data,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

