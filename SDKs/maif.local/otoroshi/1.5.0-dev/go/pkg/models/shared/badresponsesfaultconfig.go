package shared



type BadResponsesFaultConfig struct {
    Ratio float64 `json:"ratio"`
    Responses []BadResponse `json:"responses"`
    
}

