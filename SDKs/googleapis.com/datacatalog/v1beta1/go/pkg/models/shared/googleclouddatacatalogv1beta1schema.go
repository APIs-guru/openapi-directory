package shared

// GoogleCloudDatacatalogV1beta1Schema
// Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
type GoogleCloudDatacatalogV1beta1Schema struct {
	Columns []GoogleCloudDatacatalogV1beta1ColumnSchema `json:"columns,omitempty"`
}
