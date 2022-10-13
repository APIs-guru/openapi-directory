package operations

type GetMarketdataExchangeComponents200ApplicationJSONMapping struct {
	Bit      *float64 `json:"bit"`
	Code     *string  `json:"code"`
	Exchange *string  `json:"exchange"`
}

type GetMarketdataExchangeComponents200ApplicationJSON struct {
	Complete *bool                                                      `json:"Complete"`
	ConID    *float64                                                   `json:"ConId"`
	Mapping  []GetMarketdataExchangeComponents200ApplicationJSONMapping `json:"mapping"`
}

type GetMarketdataExchangeComponentsResponse struct {
	ContentType                                              string
	GetMarketdataExchangeComponents200ApplicationJSONObjects []GetMarketdataExchangeComponents200ApplicationJSON
	StatusCode                                               int64
}
