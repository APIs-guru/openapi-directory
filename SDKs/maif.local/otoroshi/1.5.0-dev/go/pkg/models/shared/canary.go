package shared



type Canary struct {
    Enabled bool `json:"enabled"`
    Root string `json:"root"`
    Targets []Target `json:"targets"`
    Traffic int32 `json:"traffic"`
    
}

