package shared

type SparkSQLBatch struct {
	JarFileUris    []string          `json:"jarFileUris"`
	QueryFileURI   *string           `json:"queryFileUri"`
	QueryVariables map[string]string `json:"queryVariables"`
}
