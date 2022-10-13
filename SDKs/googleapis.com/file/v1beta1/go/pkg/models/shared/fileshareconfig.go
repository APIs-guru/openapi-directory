package shared

type FileShareConfig struct {
	CapacityGb       *string            `json:"capacityGb"`
	Name             *string            `json:"name"`
	NfsExportOptions []NfsExportOptions `json:"nfsExportOptions"`
	SourceBackup     *string            `json:"sourceBackup"`
}
