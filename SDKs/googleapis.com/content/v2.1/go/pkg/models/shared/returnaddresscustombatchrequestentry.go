package shared

type ReturnaddressCustomBatchRequestEntry struct {
	BatchID         *int64         `json:"batchId,omitempty"`
	MerchantID      *string        `json:"merchantId,omitempty"`
	Method          *string        `json:"method,omitempty"`
	ReturnAddress   *ReturnAddress `json:"returnAddress,omitempty"`
	ReturnAddressID *string        `json:"returnAddressId,omitempty"`
}
