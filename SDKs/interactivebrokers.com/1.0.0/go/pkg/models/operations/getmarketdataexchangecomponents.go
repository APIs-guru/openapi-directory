package operations

type GetMarketdataExchangeComponents200ApplicationJSONMapping struct {
	Bit      *float64 `json:"bit,omitempty"`
	Code     *string  `json:"code,omitempty"`
	Exchange *string  `json:"exchange,omitempty"`
}

type GetMarketdataExchangeComponents200ApplicationJSON struct {
	Complete *bool                                                      `json:"Complete,omitempty"`
	ConID    *float64                                                   `json:"ConId,omitempty"`
	Mapping  []GetMarketdataExchangeComponents200ApplicationJSONMapping `json:"mapping,omitempty"`
}

type GetMarketdataExchangeComponentsResponse struct {
	ContentType                                              string
	GetMarketdataExchangeComponents200ApplicationJSONObjects []GetMarketdataExchangeComponents200ApplicationJSON
	StatusCode                                               int64
}
