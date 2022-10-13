package shared

type GetAddressResponse struct {
	AddrStr                  *string  `json:"addrStr"`
	Balance                  *float64 `json:"balance"`
	BalanceSat               *float64 `json:"balanceSat"`
	TotalReceived            *float64 `json:"totalReceived"`
	TotalReceivedSat         *float64 `json:"totalReceivedSat"`
	TotalSent                *float64 `json:"totalSent"`
	TotalSentSat             *float64 `json:"totalSentSat"`
	Transactions             []string `json:"transactions"`
	TxAppearances            *float64 `json:"txAppearances"`
	UnconfirmedBalance       *float64 `json:"unconfirmedBalance"`
	UnconfirmedBalanceSat    *float64 `json:"unconfirmedBalanceSat"`
	UnconfirmedTxAppearances *float64 `json:"unconfirmedTxAppearances"`
}
