package shared



type ManagedZonePrivateVisibilityConfig struct {
    GkeClusters []ManagedZonePrivateVisibilityConfigGkeCluster `json:"gkeClusters,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Networks []ManagedZonePrivateVisibilityConfigNetwork `json:"networks,omitempty"`
    
}

