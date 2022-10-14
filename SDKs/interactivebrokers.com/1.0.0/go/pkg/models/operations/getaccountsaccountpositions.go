package operations

type GetAccountsAccountPositionsPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountPositionsRequest struct {
	PathParams GetAccountsAccountPositionsPathParams
}

type GetAccountsAccountPositions200ApplicationJSON struct {
	AverageCost *float64 `json:"AverageCost,omitempty"`
	ContractID  *float64 `json:"ContractId,omitempty"`
	Position    *float64 `json:"Position,omitempty"`
}

type GetAccountsAccountPositionsResponse struct {
	ContentType                                          string
	GetAccountsAccountPositions200ApplicationJSONObjects []GetAccountsAccountPositions200ApplicationJSON
	StatusCode                                           int64
}
