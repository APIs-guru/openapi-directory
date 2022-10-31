package shared



type PolicyAlternativeNameServerConfig struct {
    Kind *string `json:"kind,omitempty"`
    TargetNameServers []PolicyAlternativeNameServerConfigTargetNameServer `json:"targetNameServers,omitempty"`
    
}

