package shared



type HiveJob struct {
    ContinueOnFailure *bool `json:"continueOnFailure,omitempty"`
    JarFileUris []string `json:"jarFileUris,omitempty"`
    Properties map[string]string `json:"properties,omitempty"`
    QueryFileURI *string `json:"queryFileUri,omitempty"`
    QueryList *QueryList `json:"queryList,omitempty"`
    ScriptVariables map[string]string `json:"scriptVariables,omitempty"`
    
}

