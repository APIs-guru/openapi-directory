package shared

type FileShareConfig struct {
	CapacityGb       *string            `json:"capacityGb,omitempty"`
	Name             *string            `json:"name,omitempty"`
	NfsExportOptions []NfsExportOptions `json:"nfsExportOptions,omitempty"`
	SourceBackup     *string            `json:"sourceBackup,omitempty"`
}
