package shared

type OutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
