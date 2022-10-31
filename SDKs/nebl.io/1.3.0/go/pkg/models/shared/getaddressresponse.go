package shared



type GetAddressResponse struct {
    AddrStr *string `json:"addrStr,omitempty"`
    Balance *float64 `json:"balance,omitempty"`
    BalanceSat *float64 `json:"balanceSat,omitempty"`
    TotalReceived *float64 `json:"totalReceived,omitempty"`
    TotalReceivedSat *float64 `json:"totalReceivedSat,omitempty"`
    TotalSent *float64 `json:"totalSent,omitempty"`
    TotalSentSat *float64 `json:"totalSentSat,omitempty"`
    Transactions []string `json:"transactions,omitempty"`
    TxAppearances *float64 `json:"txAppearances,omitempty"`
    UnconfirmedBalance *float64 `json:"unconfirmedBalance,omitempty"`
    UnconfirmedBalanceSat *float64 `json:"unconfirmedBalanceSat,omitempty"`
    UnconfirmedTxAppearances *float64 `json:"unconfirmedTxAppearances,omitempty"`
    
}

