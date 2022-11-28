package shared

// ListDatabaseInstancesResponse
// The response from the ListDatabaseInstances method.
type ListDatabaseInstancesResponse struct {
	Instances     []DatabaseInstance `json:"instances,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
