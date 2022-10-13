package shared

type SetLocationsRequest struct {
	ClusterID *string  `json:"clusterId"`
	Locations []string `json:"locations"`
	Name      *string  `json:"name"`
	ProjectID *string  `json:"projectId"`
	Zone      *string  `json:"zone"`
}
