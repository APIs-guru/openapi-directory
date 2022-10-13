package shared

type PartitionQueryRequest struct {
	ParamTypes       map[string]Type        `json:"paramTypes"`
	Params           map[string]interface{} `json:"params"`
	PartitionOptions *PartitionOptions      `json:"partitionOptions"`
	SQL              *string                `json:"sql"`
	Transaction      *TransactionSelector   `json:"transaction"`
}
