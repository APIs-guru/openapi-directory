package shared

// TriggererResource
// Configuration for resources used by Airflow triggerers.
type TriggererResource struct {
	Count    *int32   `json:"count,omitempty"`
	CPU      *float32 `json:"cpu,omitempty"`
	MemoryGb *float32 `json:"memoryGb,omitempty"`
}
