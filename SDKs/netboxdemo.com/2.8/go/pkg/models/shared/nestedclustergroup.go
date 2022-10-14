package shared

type NestedClusterGroup struct {
	ClusterCount *int64  `json:"cluster_count,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
	URL          *string `json:"url,omitempty"`
}
