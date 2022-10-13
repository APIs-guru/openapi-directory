package operations

type GetMarketdataSnapshotRequestBody struct {
	Conid    *float64 `json:"conid"`
	Currency *string  `json:"currency"`
	Exchange *string  `json:"exchange"`
	Symbol   *string  `json:"symbol"`
	Type     *string  `json:"type"`
}

type GetMarketdataSnapshotRequest struct {
	Request []GetMarketdataSnapshotRequestBody `request:"mediaType=application/json"`
}

type GetMarketdataSnapshot200ApplicationJSONBid struct {
	Market *float64 `json:"market"`
	Price  *float64 `json:"price"`
	Size   *float64 `json:"size"`
}

type GetMarketdataSnapshot200ApplicationJSONClosing struct {
	Price *float64 `json:"price"`
}

type GetMarketdataSnapshot200ApplicationJSONOffer struct {
	Market *float64 `json:"market"`
	Price  *float64 `json:"price"`
	Size   *float64 `json:"size"`
}

type GetMarketdataSnapshot200ApplicationJSONTrade struct {
	Market *float64 `json:"market"`
	Price  *float64 `json:"price"`
	Size   *float64 `json:"size"`
	Time   *float64 `json:"time"`
}

type GetMarketdataSnapshot200ApplicationJSON struct {
	Bid         *GetMarketdataSnapshot200ApplicationJSONBid     `json:"Bid"`
	Closing     *GetMarketdataSnapshot200ApplicationJSONClosing `json:"Closing"`
	Complete    *bool                                           `json:"Complete"`
	Conid       *string                                         `json:"Conid"`
	Offer       *GetMarketdataSnapshot200ApplicationJSONOffer   `json:"Offer"`
	Temporality *float64                                        `json:"Temporality"`
	Trade       *GetMarketdataSnapshot200ApplicationJSONTrade   `json:"Trade"`
}

type GetMarketdataSnapshotResponse struct {
	ContentType                                    string
	GetMarketdataSnapshot200ApplicationJSONObjects []GetMarketdataSnapshot200ApplicationJSON
	StatusCode                                     int64
}
