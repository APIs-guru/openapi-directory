package shared

type ReadRequest struct {
	Columns        []string             `json:"columns"`
	Index          *string              `json:"index"`
	KeySet         *KeySet              `json:"keySet"`
	Limit          *string              `json:"limit"`
	PartitionToken *string              `json:"partitionToken"`
	RequestOptions *RequestOptions      `json:"requestOptions"`
	ResumeToken    *string              `json:"resumeToken"`
	Table          *string              `json:"table"`
	Transaction    *TransactionSelector `json:"transaction"`
}
