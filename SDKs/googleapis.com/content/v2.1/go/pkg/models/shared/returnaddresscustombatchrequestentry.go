package shared

type ReturnaddressCustomBatchRequestEntry struct {
	BatchID         *int64         `json:"batchId"`
	MerchantID      *string        `json:"merchantId"`
	Method          *string        `json:"method"`
	ReturnAddress   *ReturnAddress `json:"returnAddress"`
	ReturnAddressID *string        `json:"returnAddressId"`
}
