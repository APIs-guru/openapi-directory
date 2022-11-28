package shared

// SingleClusterRouting
// Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
type SingleClusterRouting struct {
	AllowTransactionalWrites *bool   `json:"allowTransactionalWrites,omitempty"`
	ClusterID                *string `json:"clusterId,omitempty"`
}
