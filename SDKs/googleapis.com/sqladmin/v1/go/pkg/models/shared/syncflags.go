package shared

// SyncFlags
// Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
type SyncFlags struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
