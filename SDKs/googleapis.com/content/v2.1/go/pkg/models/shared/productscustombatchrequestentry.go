package shared

type ProductsCustomBatchRequestEntry struct {
	BatchID    *int64   `json:"batchId"`
	FeedID     *string  `json:"feedId"`
	MerchantID *string  `json:"merchantId"`
	Method     *string  `json:"method"`
	Product    *Product `json:"product"`
	ProductID  *string  `json:"productId"`
	UpdateMask *string  `json:"updateMask"`
}
