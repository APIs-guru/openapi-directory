package shared



type OrderreportsListDisbursementsResponse struct {
    Disbursements []OrderReportDisbursement `json:"disbursements,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

