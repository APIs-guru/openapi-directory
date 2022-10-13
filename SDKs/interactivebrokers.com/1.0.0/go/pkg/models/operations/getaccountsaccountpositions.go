package operations

type GetAccountsAccountPositionsPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountPositionsRequest struct {
	PathParams GetAccountsAccountPositionsPathParams
}

type GetAccountsAccountPositions200ApplicationJSON struct {
	AverageCost *float64 `json:"AverageCost"`
	ContractID  *float64 `json:"ContractId"`
	Position    *float64 `json:"Position"`
}

type GetAccountsAccountPositionsResponse struct {
	ContentType                                          string
	GetAccountsAccountPositions200ApplicationJSONObjects []GetAccountsAccountPositions200ApplicationJSON
	StatusCode                                           int64
}
