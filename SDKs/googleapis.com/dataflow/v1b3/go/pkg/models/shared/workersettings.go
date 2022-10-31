package shared



type WorkerSettings struct {
    BaseURL *string `json:"baseUrl,omitempty"`
    ReportingEnabled *bool `json:"reportingEnabled,omitempty"`
    ServicePath *string `json:"servicePath,omitempty"`
    ShuffleServicePath *string `json:"shuffleServicePath,omitempty"`
    TempStoragePrefix *string `json:"tempStoragePrefix,omitempty"`
    WorkerID *string `json:"workerId,omitempty"`
    
}

