package shared

// QueryList
// A list of queries to run on a cluster.
type QueryList struct {
	Queries []string `json:"queries,omitempty"`
}
