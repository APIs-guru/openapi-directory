package shared

// AccountsCustomBatchRequestEntryInput
// A batch entry encoding a single non-batch accounts request.
type AccountsCustomBatchRequestEntryInput struct {
	Account     *AccountInput                               `json:"account,omitempty"`
	AccountID   *string                                     `json:"accountId,omitempty"`
	BatchID     *int64                                      `json:"batchId,omitempty"`
	Force       *bool                                       `json:"force,omitempty"`
	LabelIds    []string                                    `json:"labelIds,omitempty"`
	LinkRequest *AccountsCustomBatchRequestEntryLinkRequest `json:"linkRequest,omitempty"`
	MerchantID  *string                                     `json:"merchantId,omitempty"`
	Method      *string                                     `json:"method,omitempty"`
	Overwrite   *bool                                       `json:"overwrite,omitempty"`
	View        *string                                     `json:"view,omitempty"`
}
