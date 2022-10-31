package shared

type GetTxsResponse struct {
	PagesTotal *float64        `json:"pagesTotal,omitempty"`
	Txs        []GetTxResponse `json:"txs,omitempty"`
}
