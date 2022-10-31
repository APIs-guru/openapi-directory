package shared



type RedirectionSettings struct {
    Code int32 `json:"code"`
    Enabled bool `json:"enabled"`
    To string `json:"to"`
    
}

