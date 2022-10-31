package shared

type AccountsCustomBatchRequestEntry struct {
	Account     *Account                                    `json:"account,omitempty"`
	AccountID   *string                                     `json:"accountId,omitempty"`
	BatchID     *int64                                      `json:"batchId,omitempty"`
	Force       *bool                                       `json:"force,omitempty"`
	LabelIds    []string                                    `json:"labelIds,omitempty"`
	LinkRequest *AccountsCustomBatchRequestEntryLinkRequest `json:"linkRequest,omitempty"`
	MerchantID  *string                                     `json:"merchantId,omitempty"`
	Method      *string                                     `json:"method,omitempty"`
	Overwrite   *bool                                       `json:"overwrite,omitempty"`
}
