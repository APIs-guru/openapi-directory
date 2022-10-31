package shared



type ManagedZoneForwardingConfig struct {
    Kind *string `json:"kind,omitempty"`
    TargetNameServers []ManagedZoneForwardingConfigNameServerTarget `json:"targetNameServers,omitempty"`
    
}

