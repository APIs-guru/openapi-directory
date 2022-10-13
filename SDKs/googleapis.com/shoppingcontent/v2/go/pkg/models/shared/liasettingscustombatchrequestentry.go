package shared

type LiasettingsCustomBatchRequestEntry struct {
	AccountID            *string      `json:"accountId"`
	BatchID              *int64       `json:"batchId"`
	ContactEmail         *string      `json:"contactEmail"`
	ContactName          *string      `json:"contactName"`
	Country              *string      `json:"country"`
	GmbEmail             *string      `json:"gmbEmail"`
	LiaSettings          *LiaSettings `json:"liaSettings"`
	MerchantID           *string      `json:"merchantId"`
	Method               *string      `json:"method"`
	PosDataProviderID    *string      `json:"posDataProviderId"`
	PosExternalAccountID *string      `json:"posExternalAccountId"`
}
