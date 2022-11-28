package shared

// ManagedZoneServiceDirectoryConfig
// Contains information about Service Directory-backed zones.
type ManagedZoneServiceDirectoryConfig struct {
	Kind      *string                                     `json:"kind,omitempty"`
	Namespace *ManagedZoneServiceDirectoryConfigNamespace `json:"namespace,omitempty"`
}
