package shared



type AccountstatusesCustomBatchRequestEntry struct {
    AccountID *string `json:"accountId,omitempty"`
    BatchID *int64 `json:"batchId,omitempty"`
    Destinations []string `json:"destinations,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    
}

