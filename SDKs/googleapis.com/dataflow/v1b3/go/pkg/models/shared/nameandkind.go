package shared

type NameAndKindKindEnum string

const (
	NameAndKindKindEnumInvalid      NameAndKindKindEnum = "INVALID"
	NameAndKindKindEnumSum          NameAndKindKindEnum = "SUM"
	NameAndKindKindEnumMax          NameAndKindKindEnum = "MAX"
	NameAndKindKindEnumMin          NameAndKindKindEnum = "MIN"
	NameAndKindKindEnumMean         NameAndKindKindEnum = "MEAN"
	NameAndKindKindEnumOr           NameAndKindKindEnum = "OR"
	NameAndKindKindEnumAnd          NameAndKindKindEnum = "AND"
	NameAndKindKindEnumSet          NameAndKindKindEnum = "SET"
	NameAndKindKindEnumDistribution NameAndKindKindEnum = "DISTRIBUTION"
	NameAndKindKindEnumLatestValue  NameAndKindKindEnum = "LATEST_VALUE"
)

type NameAndKind struct {
	Kind *NameAndKindKindEnum `json:"kind"`
	Name *string              `json:"name"`
}
