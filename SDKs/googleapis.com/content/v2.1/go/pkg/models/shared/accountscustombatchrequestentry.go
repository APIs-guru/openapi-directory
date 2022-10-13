package shared

type AccountsCustomBatchRequestEntry struct {
	Account     *Account                                    `json:"account"`
	AccountID   *string                                     `json:"accountId"`
	BatchID     *int64                                      `json:"batchId"`
	Force       *bool                                       `json:"force"`
	LabelIds    []string                                    `json:"labelIds"`
	LinkRequest *AccountsCustomBatchRequestEntryLinkRequest `json:"linkRequest"`
	MerchantID  *string                                     `json:"merchantId"`
	Method      *string                                     `json:"method"`
	Overwrite   *bool                                       `json:"overwrite"`
	View        *string                                     `json:"view"`
}
