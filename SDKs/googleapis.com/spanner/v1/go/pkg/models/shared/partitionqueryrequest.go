package shared

// PartitionQueryRequest
// The request for PartitionQuery
type PartitionQueryRequest struct {
	ParamTypes       map[string]Type        `json:"paramTypes,omitempty"`
	Params           map[string]interface{} `json:"params,omitempty"`
	PartitionOptions *PartitionOptions      `json:"partitionOptions,omitempty"`
	SQL              *string                `json:"sql,omitempty"`
	Transaction      *TransactionSelector   `json:"transaction,omitempty"`
}
