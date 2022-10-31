package shared



type TargetConfiguration struct {
    Config *ConfigFile `json:"config,omitempty"`
    Imports []ImportFile `json:"imports,omitempty"`
    
}

