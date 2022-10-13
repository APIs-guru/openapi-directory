package shared

type ManagedZonePrivateVisibilityConfig struct {
	GkeClusters []ManagedZonePrivateVisibilityConfigGkeCluster `json:"gkeClusters"`
	Kind        *string                                        `json:"kind"`
	Networks    []ManagedZonePrivateVisibilityConfigNetwork    `json:"networks"`
}
