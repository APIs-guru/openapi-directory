package shared

type BatchGetDocumentsResponse struct {
	Found       *Document `json:"found"`
	Missing     *string   `json:"missing"`
	ReadTime    *string   `json:"readTime"`
	Transaction *string   `json:"transaction"`
}
