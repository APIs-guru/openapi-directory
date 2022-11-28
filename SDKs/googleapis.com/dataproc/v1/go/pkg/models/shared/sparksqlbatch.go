package shared

// SparkSQLBatch
// A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
type SparkSQLBatch struct {
	JarFileUris    []string          `json:"jarFileUris,omitempty"`
	QueryFileURI   *string           `json:"queryFileUri,omitempty"`
	QueryVariables map[string]string `json:"queryVariables,omitempty"`
}
