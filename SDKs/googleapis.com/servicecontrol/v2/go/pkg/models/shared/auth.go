package shared



type Auth struct {
    AccessLevels []string `json:"accessLevels,omitempty"`
    Audiences []string `json:"audiences,omitempty"`
    Claims map[string]interface{} `json:"claims,omitempty"`
    Presenter *string `json:"presenter,omitempty"`
    Principal *string `json:"principal,omitempty"`
    
}

