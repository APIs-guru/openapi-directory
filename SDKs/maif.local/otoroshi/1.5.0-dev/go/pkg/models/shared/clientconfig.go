package shared



type ClientConfig struct {
    BackoffFactor int32 `json:"backoffFactor"`
    CallTimeout int32 `json:"callTimeout"`
    GlobalTimeout int32 `json:"globalTimeout"`
    MaxErrors int32 `json:"maxErrors"`
    Retries int32 `json:"retries"`
    RetryInitialDelay int32 `json:"retryInitialDelay"`
    SampleInterval int32 `json:"sampleInterval"`
    UseCircuitBreaker bool `json:"useCircuitBreaker"`
    
}

