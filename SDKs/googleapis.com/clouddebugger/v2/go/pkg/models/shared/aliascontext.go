package shared

type AliasContextKindEnum string

const (
	AliasContextKindEnumAny     AliasContextKindEnum = "ANY"
	AliasContextKindEnumFixed   AliasContextKindEnum = "FIXED"
	AliasContextKindEnumMovable AliasContextKindEnum = "MOVABLE"
	AliasContextKindEnumOther   AliasContextKindEnum = "OTHER"
)

// AliasContext
// An alias to a repo revision.
type AliasContext struct {
	Kind *AliasContextKindEnum `json:"kind,omitempty"`
	Name *string               `json:"name,omitempty"`
}
