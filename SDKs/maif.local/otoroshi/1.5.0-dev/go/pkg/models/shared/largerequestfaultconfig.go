package shared



type LargeRequestFaultConfig struct {
    AdditionalRequestSize int32 `json:"additionalRequestSize"`
    Ratio float64 `json:"ratio"`
    
}

