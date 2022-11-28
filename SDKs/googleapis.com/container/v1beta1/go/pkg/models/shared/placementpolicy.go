package shared

type PlacementPolicyTypeEnum string

const (
	PlacementPolicyTypeEnumTypeUnspecified PlacementPolicyTypeEnum = "TYPE_UNSPECIFIED"
	PlacementPolicyTypeEnumCompact         PlacementPolicyTypeEnum = "COMPACT"
)

// PlacementPolicy
// PlacementPolicy defines the placement policy used by the node pool.
type PlacementPolicy struct {
	Type *PlacementPolicyTypeEnum `json:"type,omitempty"`
}
