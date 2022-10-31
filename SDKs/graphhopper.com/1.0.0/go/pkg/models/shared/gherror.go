package shared



type GhErrorHints struct {
    Message *string `json:"message,omitempty"`
    
}

type GhError struct {
    Hints []GhErrorHints `json:"hints,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

