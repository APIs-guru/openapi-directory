package shared

type ResultSetMetadata struct {
	RowType              *StructType  `json:"rowType"`
	Transaction          *Transaction `json:"transaction"`
	UndeclaredParameters *StructType  `json:"undeclaredParameters"`
}
