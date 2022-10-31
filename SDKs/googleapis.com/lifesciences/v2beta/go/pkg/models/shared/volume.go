package shared

type Volume struct {
	ExistingDisk   *ExistingDisk   `json:"existingDisk,omitempty"`
	NfsMount       *NfsMount       `json:"nfsMount,omitempty"`
	PersistentDisk *PersistentDisk `json:"persistentDisk,omitempty"`
	Volume         *string         `json:"volume,omitempty"`
}
