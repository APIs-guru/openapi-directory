package shared

type ProductsCustomBatchRequest struct {
	Entries []ProductsCustomBatchRequestEntry `json:"entries"`
}
