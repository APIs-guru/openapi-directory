package operations

type GetMarketdataSnapshotRequestBody struct {
	Conid    *float64 `json:"conid,omitempty"`
	Currency *string  `json:"currency,omitempty"`
	Exchange *string  `json:"exchange,omitempty"`
	Symbol   *string  `json:"symbol,omitempty"`
	Type     *string  `json:"type,omitempty"`
}

type GetMarketdataSnapshotRequest struct {
	Request []GetMarketdataSnapshotRequestBody `request:"mediaType=application/json"`
}

type GetMarketdataSnapshot200ApplicationJSONBid struct {
	Market *float64 `json:"market,omitempty"`
	Price  *float64 `json:"price,omitempty"`
	Size   *float64 `json:"size,omitempty"`
}

type GetMarketdataSnapshot200ApplicationJSONClosing struct {
	Price *float64 `json:"price,omitempty"`
}

type GetMarketdataSnapshot200ApplicationJSONOffer struct {
	Market *float64 `json:"market,omitempty"`
	Price  *float64 `json:"price,omitempty"`
	Size   *float64 `json:"size,omitempty"`
}

type GetMarketdataSnapshot200ApplicationJSONTrade struct {
	Market *float64 `json:"market,omitempty"`
	Price  *float64 `json:"price,omitempty"`
	Size   *float64 `json:"size,omitempty"`
	Time   *float64 `json:"time,omitempty"`
}

type GetMarketdataSnapshot200ApplicationJSON struct {
	Bid         *GetMarketdataSnapshot200ApplicationJSONBid     `json:"Bid,omitempty"`
	Closing     *GetMarketdataSnapshot200ApplicationJSONClosing `json:"Closing,omitempty"`
	Complete    *bool                                           `json:"Complete,omitempty"`
	Conid       *string                                         `json:"Conid,omitempty"`
	Offer       *GetMarketdataSnapshot200ApplicationJSONOffer   `json:"Offer,omitempty"`
	Temporality *float64                                        `json:"Temporality,omitempty"`
	Trade       *GetMarketdataSnapshot200ApplicationJSONTrade   `json:"Trade,omitempty"`
}

type GetMarketdataSnapshotResponse struct {
	ContentType                                    string
	GetMarketdataSnapshot200ApplicationJSONObjects []GetMarketdataSnapshot200ApplicationJSON
	StatusCode                                     int64
}
