package shared

type OrderreportsListTransactionsResponse struct {
	Kind          *string                  `json:"kind"`
	NextPageToken *string                  `json:"nextPageToken"`
	Transactions  []OrderReportTransaction `json:"transactions"`
}
