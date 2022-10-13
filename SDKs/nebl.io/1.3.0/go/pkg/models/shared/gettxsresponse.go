package shared

type GetTxsResponse struct {
	PagesTotal *float64        `json:"pagesTotal"`
	Txs        []GetTxResponse `json:"txs"`
}
