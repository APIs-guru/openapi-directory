package shared

type ReturnpolicyCustomBatchRequestEntry struct {
	BatchID        *int64        `json:"batchId,omitempty"`
	MerchantID     *string       `json:"merchantId,omitempty"`
	Method         *string       `json:"method,omitempty"`
	ReturnPolicy   *ReturnPolicy `json:"returnPolicy,omitempty"`
	ReturnPolicyID *string       `json:"returnPolicyId,omitempty"`
}
