package shared

type OrderReportDisbursement struct {
	DisbursementAmount       *Price  `json:"disbursementAmount"`
	DisbursementCreationDate *string `json:"disbursementCreationDate"`
	DisbursementDate         *string `json:"disbursementDate"`
	DisbursementID           *string `json:"disbursementId"`
	MerchantID               *string `json:"merchantId"`
}
