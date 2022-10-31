package shared

type OrderReportDisbursement struct {
	DisbursementAmount       *Price  `json:"disbursementAmount,omitempty"`
	DisbursementCreationDate *string `json:"disbursementCreationDate,omitempty"`
	DisbursementDate         *string `json:"disbursementDate,omitempty"`
	DisbursementID           *string `json:"disbursementId,omitempty"`
	MerchantID               *string `json:"merchantId,omitempty"`
}
