package shared

// WebServerResource
// Configuration for resources used by Airflow web server.
type WebServerResource struct {
	CPU       *float32 `json:"cpu,omitempty"`
	MemoryGb  *float32 `json:"memoryGb,omitempty"`
	StorageGb *float32 `json:"storageGb,omitempty"`
}
