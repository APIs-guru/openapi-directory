package shared



type GoogleCloudDataplexV1TaskExecutionSpec struct {
    Args map[string]string `json:"args,omitempty"`
    KmsKey *string `json:"kmsKey,omitempty"`
    MaxJobExecutionLifetime *string `json:"maxJobExecutionLifetime,omitempty"`
    Project *string `json:"project,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    
}

