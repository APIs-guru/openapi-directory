package shared

// FailedLocation
// Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.
type FailedLocation struct {
	Name *string `json:"name,omitempty"`
}
