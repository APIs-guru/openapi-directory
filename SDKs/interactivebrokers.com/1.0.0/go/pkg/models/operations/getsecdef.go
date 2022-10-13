package operations

type GetSecdefRequestBody struct {
	Conid    *float64 `json:"conid"`
	Currency *string  `json:"currency"`
	Exchange *string  `json:"exchange"`
	Symbol   *string  `json:"symbol"`
	Type     *string  `json:"type"`
}

type GetSecdefRequest struct {
	Request GetSecdefRequestBody `request:"mediaType=application/json"`
}

type GetSecdef200ApplicationJSON struct {
	CompanyName  *string  `json:"CompanyName"`
	ContractID   *float64 `json:"ContractId"`
	Currency     *string  `json:"Currency"`
	Exchange     *string  `json:"Exchange"`
	SecurityType *string  `json:"SecurityType"`
	Ticker       *string  `json:"Ticker"`
}

type GetSecdefResponse struct {
	ContentType                        string
	GetSecdef200ApplicationJSONObjects []GetSecdef200ApplicationJSON
	StatusCode                         int64
}
