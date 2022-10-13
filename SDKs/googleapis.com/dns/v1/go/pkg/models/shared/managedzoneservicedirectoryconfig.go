package shared

type ManagedZoneServiceDirectoryConfig struct {
	Kind      *string                                     `json:"kind"`
	Namespace *ManagedZoneServiceDirectoryConfigNamespace `json:"namespace"`
}
