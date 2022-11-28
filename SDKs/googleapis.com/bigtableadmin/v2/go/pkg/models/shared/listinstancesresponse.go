package shared

// ListInstancesResponse
// Response message for BigtableInstanceAdmin.ListInstances.
type ListInstancesResponse struct {
	FailedLocations []string   `json:"failedLocations,omitempty"`
	Instances       []Instance `json:"instances,omitempty"`
	NextPageToken   *string    `json:"nextPageToken,omitempty"`
}
