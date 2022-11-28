package shared

// NodeGroupAffinity
// Node Group Affinity for clusters using sole-tenant node groups.
type NodeGroupAffinity struct {
	NodeGroupURI *string `json:"nodeGroupUri,omitempty"`
}
