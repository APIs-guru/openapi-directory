package shared

type ResultSetMetadata struct {
	RowType              *StructType  `json:"rowType,omitempty"`
	Transaction          *Transaction `json:"transaction,omitempty"`
	UndeclaredParameters *StructType  `json:"undeclaredParameters,omitempty"`
}
