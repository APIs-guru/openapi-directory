package shared

type OrderreportsListDisbursementsResponse struct {
	Disbursements []OrderReportDisbursement `json:"disbursements"`
	Kind          *string                   `json:"kind"`
	NextPageToken *string                   `json:"nextPageToken"`
}
