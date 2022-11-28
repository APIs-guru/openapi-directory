package shared

// GetTxsResponse
// Object containing an array of transaction objects
type GetTxsResponse struct {
	PagesTotal *float64        `json:"pagesTotal,omitempty"`
	Txs        []GetTxResponse `json:"txs,omitempty"`
}
