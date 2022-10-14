package shared

type PlacementPolicyTypeEnum string

const (
	PlacementPolicyTypeEnumTypeUnspecified PlacementPolicyTypeEnum = "TYPE_UNSPECIFIED"
	PlacementPolicyTypeEnumCompact         PlacementPolicyTypeEnum = "COMPACT"
)

type PlacementPolicy struct {
	Type *PlacementPolicyTypeEnum `json:"type,omitempty"`
}
