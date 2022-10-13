package shared

type ProductsCustomBatchRequestEntry struct {
	BatchID    *int64   `json:"batchId"`
	MerchantID *string  `json:"merchantId"`
	Method     *string  `json:"method"`
	Product    *Product `json:"product"`
	ProductID  *string  `json:"productId"`
}
