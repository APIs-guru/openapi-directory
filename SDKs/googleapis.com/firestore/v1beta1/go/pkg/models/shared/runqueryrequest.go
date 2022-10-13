package shared

type RunQueryRequest struct {
	NewTransaction  *TransactionOptions `json:"newTransaction"`
	ReadTime        *string             `json:"readTime"`
	StructuredQuery *StructuredQuery    `json:"structuredQuery"`
	Transaction     *string             `json:"transaction"`
}
