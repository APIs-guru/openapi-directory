package shared

type ReturnpolicyCustomBatchRequestEntry struct {
	BatchID        *int64        `json:"batchId"`
	MerchantID     *string       `json:"merchantId"`
	Method         *string       `json:"method"`
	ReturnPolicy   *ReturnPolicy `json:"returnPolicy"`
	ReturnPolicyID *string       `json:"returnPolicyId"`
}
