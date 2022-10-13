package shared

type WorkerSettings struct {
	BaseURL            *string `json:"baseUrl"`
	ReportingEnabled   *bool   `json:"reportingEnabled"`
	ServicePath        *string `json:"servicePath"`
	ShuffleServicePath *string `json:"shuffleServicePath"`
	TempStoragePrefix  *string `json:"tempStoragePrefix"`
	WorkerID           *string `json:"workerId"`
}
