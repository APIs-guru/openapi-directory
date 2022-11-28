package shared

// SetLocationsRequest
// SetLocationsRequest sets the locations of the cluster.
type SetLocationsRequest struct {
	ClusterID *string  `json:"clusterId,omitempty"`
	Locations []string `json:"locations,omitempty"`
	Name      *string  `json:"name,omitempty"`
	ProjectID *string  `json:"projectId,omitempty"`
	Zone      *string  `json:"zone,omitempty"`
}
