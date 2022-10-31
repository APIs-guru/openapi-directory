package shared



type SparkSQLJob struct {
    JarFileUris []string `json:"jarFileUris,omitempty"`
    LoggingConfig *LoggingConfig `json:"loggingConfig,omitempty"`
    Properties map[string]string `json:"properties,omitempty"`
    QueryFileURI *string `json:"queryFileUri,omitempty"`
    QueryList *QueryList `json:"queryList,omitempty"`
    ScriptVariables map[string]string `json:"scriptVariables,omitempty"`
    
}

