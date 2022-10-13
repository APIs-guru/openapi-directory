package shared

type AliasContextKindEnum string

const (
	AliasContextKindEnumAny     AliasContextKindEnum = "ANY"
	AliasContextKindEnumFixed   AliasContextKindEnum = "FIXED"
	AliasContextKindEnumMovable AliasContextKindEnum = "MOVABLE"
	AliasContextKindEnumOther   AliasContextKindEnum = "OTHER"
)

type AliasContext struct {
	Kind *AliasContextKindEnum `json:"kind"`
	Name *string               `json:"name"`
}
