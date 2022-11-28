package shared

type RoleKindEnum string

const (
	RoleKindEnumKindUnspecified RoleKindEnum = "KIND_UNSPECIFIED"
	RoleKindEnumRole            RoleKindEnum = "ROLE"
	RoleKindEnumClusterRole     RoleKindEnum = "CLUSTER_ROLE"
)

// Role
// Kubernetes Role or ClusterRole.
type Role struct {
	Kind *RoleKindEnum `json:"kind,omitempty"`
	Name *string       `json:"name,omitempty"`
	Ns   *string       `json:"ns,omitempty"`
}
