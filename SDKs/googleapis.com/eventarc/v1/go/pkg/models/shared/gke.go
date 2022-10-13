package shared

type Gke struct {
	Cluster   *string `json:"cluster"`
	Location  *string `json:"location"`
	Namespace *string `json:"namespace"`
	Path      *string `json:"path"`
	Service   *string `json:"service"`
}
