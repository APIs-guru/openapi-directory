package operations

type GetSecdefRequestBody struct {
	Conid    *float64 `json:"conid,omitempty"`
	Currency *string  `json:"currency,omitempty"`
	Exchange *string  `json:"exchange,omitempty"`
	Symbol   *string  `json:"symbol,omitempty"`
	Type     *string  `json:"type,omitempty"`
}

type GetSecdefRequest struct {
	Request GetSecdefRequestBody `request:"mediaType=application/json"`
}

type GetSecdef200ApplicationJSON struct {
	CompanyName  *string  `json:"CompanyName,omitempty"`
	ContractID   *float64 `json:"ContractId,omitempty"`
	Currency     *string  `json:"Currency,omitempty"`
	Exchange     *string  `json:"Exchange,omitempty"`
	SecurityType *string  `json:"SecurityType,omitempty"`
	Ticker       *string  `json:"Ticker,omitempty"`
}

type GetSecdefResponse struct {
	ContentType                        string
	GetSecdef200ApplicationJSONObjects []GetSecdef200ApplicationJSON
	StatusCode                         int64
}
