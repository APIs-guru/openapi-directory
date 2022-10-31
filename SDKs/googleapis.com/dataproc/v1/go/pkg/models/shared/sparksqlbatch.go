package shared



type SparkSQLBatch struct {
    JarFileUris []string `json:"jarFileUris,omitempty"`
    QueryFileURI *string `json:"queryFileUri,omitempty"`
    QueryVariables map[string]string `json:"queryVariables,omitempty"`
    
}

