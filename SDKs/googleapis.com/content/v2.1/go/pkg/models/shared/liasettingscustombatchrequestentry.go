package shared



type LiasettingsCustomBatchRequestEntry struct {
    AccountID *string `json:"accountId,omitempty"`
    BatchID *int64 `json:"batchId,omitempty"`
    ContactEmail *string `json:"contactEmail,omitempty"`
    ContactName *string `json:"contactName,omitempty"`
    Country *string `json:"country,omitempty"`
    GmbEmail *string `json:"gmbEmail,omitempty"`
    LiaSettings *LiaSettings `json:"liaSettings,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    Method *string `json:"method,omitempty"`
    PosDataProviderID *string `json:"posDataProviderId,omitempty"`
    PosExternalAccountID *string `json:"posExternalAccountId,omitempty"`
    
}

