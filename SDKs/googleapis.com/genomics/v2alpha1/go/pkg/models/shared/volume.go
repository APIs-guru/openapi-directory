package shared

type Volume struct {
	ExistingDisk   *ExistingDisk   `json:"existingDisk"`
	NfsMount       *NfsMount       `json:"nfsMount"`
	PersistentDisk *PersistentDisk `json:"persistentDisk"`
	Volume         *string         `json:"volume"`
}
