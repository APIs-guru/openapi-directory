package shared

type ManagedZoneServiceDirectoryConfig struct {
	Kind      *string                                     `json:"kind,omitempty"`
	Namespace *ManagedZoneServiceDirectoryConfigNamespace `json:"namespace,omitempty"`
}
