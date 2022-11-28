package shared

// ResultSetMetadata
// Metadata about a ResultSet or PartialResultSet.
type ResultSetMetadata struct {
	RowType              *StructType  `json:"rowType,omitempty"`
	Transaction          *Transaction `json:"transaction,omitempty"`
	UndeclaredParameters *StructType  `json:"undeclaredParameters,omitempty"`
}
