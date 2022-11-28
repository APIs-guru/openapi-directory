package shared

// DatastoreIoDetails
// Metadata for a Datastore connector used by the job.
type DatastoreIoDetails struct {
	Namespace *string `json:"namespace,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
}
