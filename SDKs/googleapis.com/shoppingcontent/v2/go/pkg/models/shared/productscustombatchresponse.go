package shared

type ProductsCustomBatchResponse struct {
	Entries []ProductsCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                            `json:"kind,omitempty"`
}
