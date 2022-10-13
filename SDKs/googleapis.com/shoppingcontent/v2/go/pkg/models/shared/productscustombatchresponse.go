package shared

type ProductsCustomBatchResponse struct {
	Entries []ProductsCustomBatchResponseEntry `json:"entries"`
	Kind    *string                            `json:"kind"`
}
