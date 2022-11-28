package shared

// GoogleCloudDatacatalogV1Schema
// Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
type GoogleCloudDatacatalogV1Schema struct {
	Columns []GoogleCloudDatacatalogV1ColumnSchema `json:"columns,omitempty"`
}
